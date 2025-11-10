//compound component
import React, { useState } from "react";

function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isActive: index === activeTab,
          onActivate: () => setActiveTab(index),
        })
      )}
      <div>{children[activeTab]}</div>
    </div>
  );
}
function Tab({ isActive, onActivate, label }) {
  return (
    <button
      onClick={onActivate}
      className={
        isActive ? "bg-blue-500 text-white" : "bg-green-500 text-white"
      }
    >
      {label}
    </button>
  );
}

const Compoundcomponent = () => {
  return (
    <Tabs>
      <Tab label="Tab 1" />
      <Tab label="Tab 2" />
    </Tabs>
  );
};

export { Tabs, Tab };

export default Compoundcomponent;
