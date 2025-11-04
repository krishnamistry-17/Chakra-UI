import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "../src/theme.js";

export const decorators = [
  (Story) => (
    <ChakraProvider value={myTheme}>
      <Story />
    </ChakraProvider>
  ),
];
