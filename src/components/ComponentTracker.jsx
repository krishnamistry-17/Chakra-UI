//render props

import { useState } from "react";

function MouseTracker(props = {}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const { render = () => null } = props;
  return (
    <div
      onMouseMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <p>
        Mouse position: {x},{y}
      </p>
      {render(x, y)}
    </div>
  );
}

export default MouseTracker;
