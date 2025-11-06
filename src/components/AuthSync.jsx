import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "../lib/supabaseClient";
import { setSession, clearSession, setLoading } from "../store/authSlice";

const AuthSync = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = true;
    dispatch(setLoading());

    const sync = async () => {
      const { data } = await supabase.auth.getSession();
      if (!isMounted) return;
      if (data?.session) {
        dispatch(
          setSession({ session: data.session, user: data.session.user })
        );
      } else {
        dispatch(clearSession());
      }
    };

    sync();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (!isMounted) return;
        if (session) {
          dispatch(setSession({ session, user: session.user }));
        } else {
          dispatch(clearSession());
        }
      }
    );

    return () => {
      isMounted = false;
      listener?.subscription?.unsubscribe?.();
    };
  }, [dispatch]);

  return children;
};

export default AuthSync;
