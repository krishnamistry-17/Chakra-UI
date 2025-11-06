import { fn } from "storybook/test";
import SignIn from "../pages/SignIn";

export default {
  title: "Pages/Signin",
  component: SignIn,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onSignIn: fn(),
  },
  argTypes: {
    onSignIn: { action: "sign in" },
  },
};

export const Default = {
  label: "Default",
};
