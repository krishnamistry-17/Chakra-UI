import React from "react";
import EditProfile from "../pages/EditProfile";
import { Provider } from "react-redux";
import { store } from "../store";
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "../theme";

export default {
  title: "Pages/EditProfile",
  component: EditProfile,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ChakraProvider value={myTheme}>
        <Provider store={store}>
          <Story />
        </Provider>
      </ChakraProvider>
    ),
  ],
  args: {
    user: {
      email: "test@example.com",
    },
  },
  argTypes: {
    user: { control: "object" },
  },
  argTypes: {
    user: { action: "user changed" },
  },
};

export const Default = {
  label: "Default",
};
