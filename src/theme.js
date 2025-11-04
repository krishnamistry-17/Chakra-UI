import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      scrollBehavior: "smooth",
    },
    body: {
      bg: { base: "bg", _dark: "bgDark" },
      color: { base: "fg", _dark: "fgDark" },
      transitionProperty: "background-color, color",
      transitionDuration: "0.2s",
      transitionTimingFunction: "ease-in-out",
    },
  },
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#e3f2f9" },
          100: { value: "#c5e4f3" },
          200: { value: "#a2d4ec" },
          300: { value: "#7ac1e4" },
          400: { value: "#47a9da" },
          500: { value: "#0b74da" }, // main brand color
          600: { value: "#0859bd" },
          700: { value: "#063b8a" },
          800: { value: "#042c6a" },
          900: { value: "#021f49" },
        },
        bg: { value: "#ffffff" },
        bgDark: { value: "#1a202c" }, // Chakra's gray.900
        fg: { value: "#1a202c" },
        fgDark: { value: "#f7fafc" }, // Chakra's gray.50
      },
      fonts: {
        heading: { value: `'Poppins', sans-serif` },
        body: { value: `'Inter', sans-serif` },
      },
      breakpoints: {
        base: "0em",
        sm: "320px",
        sm425: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  //  Color mode configuration
  config: {
    initialColorMode: "system", // Match user's OS preference
    useSystemColorMode: true, // Automatically switch between dark/light
  },
});

export const myTheme = createSystem(defaultConfig, config);
