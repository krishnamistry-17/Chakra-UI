import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import { Toaster, Toast } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthSync from "./components/AuthSync.jsx";
import { toaster } from "./lib/toaster.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={myTheme}>
      <Provider store={store}>
        <BrowserRouter>
          <Toaster toaster={toaster} placement="top-end">
            {(toast) => (
              <Toast.Root key={toast.id} type={toast.type}>
                <Toast.Indicator />
                <Toast.Title>{toast.title}</Toast.Title>
                {toast.description ? (
                  <Toast.Description>{toast.description}</Toast.Description>
                ) : null}
                <Toast.CloseTrigger />
              </Toast.Root>
            )}
          </Toaster>
          <AuthSync>
            <App />
          </AuthSync>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </StrictMode>
);
