//Error boundry

import React, { useEffect, useState } from "react";

const ErrorBoundry = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const error = new Error();
    console.log(error);
    setHasError(true);
  }, []);

  if (hasError) {
    return <div>Error</div>;
  }

  return <>{children}</>;
};

export default ErrorBoundry;
