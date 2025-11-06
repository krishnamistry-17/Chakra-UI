import { fn } from "storybook/test";
import ResetPassword from "../pages/ResetPassword";

export default {
  title: "Pages/ResetPassword",
  component: ResetPassword,
  parametrs: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onResetPassword: fn(),
  },
  argTypes: {
    onResetPassword: { action: "Reset password" },
  },
};

export const Default = {
  label: "Default",
};
