//Forwarding Refs

import React, { useRef } from "react";

const Input = React.forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

const ForwardRef = () => {
  const inputRef = useRef(null);
  return (
    <div style={{ margin: "20px 0" }}>
      <Input ref={inputRef} placeholder="Type here"  />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};

export default ForwardRef;
