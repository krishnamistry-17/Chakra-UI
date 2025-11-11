//Home page ->> Suspense fallback, compound component,forward ref,profiler, mouse tracker

import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Product from "./Product";
// import Counter from "../components/Counter";
// import MouseTracker from "../components/ComponentTracker";
// import { Tabs, Tab } from "../components/Compoundcomponent";
// import ForwardRef from "../components/ForwardRef";
// import UserWithLogger from "../components/HigherOrder";
// import ProfilerComponent from "../components/Profiler";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Box>
      {/* <MouseTracker
        render={(x, y) => (
          <p>
            Mouse position: {x},{y}
          </p>
        )}
      /> */}
      {/* 
      <Box p={4}>
        <Tabs>
          <Tab label="Tab 1" />
          <Tab label="Tab 2" />
        </Tabs>
        <ForwardRef />
        <UserWithLogger name="Test" />
      </Box> */}
      {/* <ProfilerComponent /> */}
      <Product />
      {/* <Counter /> using zustand */}
    </Box>
  );
};

export default Home;
