import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "../src/theme";
import { MemoryRouter } from "react-router-dom";

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <ChakraProvider value={myTheme}>
          <Story />
        </ChakraProvider>
      </MemoryRouter>
    ),
  ],
};

export default preview;


