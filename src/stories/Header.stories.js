import { fn } from "storybook/test";
import Header from "../components/Header.jsx";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
    user: {
      name: "Test user",
    },
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Test User",
    },
  },
};

export const LoggedOut = {};
