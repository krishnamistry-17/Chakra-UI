import { fn } from "storybook/test";
import SignUp from "../pages/SignUp";

export default {
  title: "Pages/signup",
  component: SignUp,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSignUp: fn(),
  },
  argTypes: {
    onSignUp: { action: "Sign up" },
  },
};

export const Default = {
  label: "Default",
};
