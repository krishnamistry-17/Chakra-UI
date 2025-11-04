import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  colors: {
    brand: {
      500: "#2b6cb0",
      900: "#1a202c",
      50: "#f7fafc",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export const myTheme = createSystem(defaultConfig, config);
