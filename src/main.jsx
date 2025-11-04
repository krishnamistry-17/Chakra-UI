import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "./theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={myTheme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
