import { fn } from "storybook/test";
import ForgotPassword from "../pages/ForgotPassword";

export default {
  title: "Pages/ForgotPassword",
  component: ForgotPassword,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onForgotPassword: fn(),
  },
  argTypes: {
    onForgotPassword: { action: "Forgot password" },
  },
};

export const Default = {
  label: "Default",
};
