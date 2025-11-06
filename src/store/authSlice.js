import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  session: null,
  user: { email: null, password: null },
  isSignedIn: false,
  status: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading(state) {
      state.status = "loading";
      state.error = null;
    },
    setUser(state, action) {
      state.user = action.payload?.user ?? { email: null, password: null };
      state.isSignedIn = true;
    },
    setSession(state, action) {
      state.session = action.payload?.session ?? null;
      state.user = action.payload?.user ?? { email: null, password: null };
      state.status = state.user ? "authenticated" : "idle";
      state.error = null;
      state.isSignedIn = true;
    },
    clearSession(state) {
      state.session = null;
      state.user = { email: null, password: null };
      state.status = "idle";
      state.error = null;
      state.isSignedIn = false;
    },
    setError(state, action) {
      state.error = action.payload || "Unknown error";
      state.status = "idle";
      state.isSignedIn = false;
    },
  },
});

export const { setLoading, setUser, setSession, clearSession, setError } =
  authSlice.actions;

export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectUserPassword = (state) => state.auth.user.password;
export const selectSession = (state) => state.auth.session;
export const selectAuthStatus = (state) => state.auth.status;
export const selectIsSignedIn = (state) => state.auth.isSignedIn;

export default authSlice.reducer;
