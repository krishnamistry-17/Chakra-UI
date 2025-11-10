//Profiler

import React, { Profiler } from "react";
import Profile from "../pages/Profile";

function onRender(id, phase, actualDuration) {
  console.log(`${id} ${phase} ${actualDuration}ms`);
}

const ProfilerComponent = () => {
  return (
    <Profiler onRender={onRender}>
      <Profile />
    </Profiler>
  );
};

export default ProfilerComponent;
