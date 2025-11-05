import { fn } from "storybook/test";
import { ColorModeButton } from "../components/ColorModeButton.jsx";

export default {
  title: "Components/ColorModeButton",
  component: ColorModeButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["ghost", "outline", "solid", "link"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
    },
    isDisabled: { control: "boolean" },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    variant: "ghost",
    size: "sm",
  },
};

export const Solid = {
  args: {
    variant: "solid",
    size: "sm",
  },
};

export const Outline = {
  args: {
    variant: "outline",
    size: "sm",
  },
};

export const Disabled = {
  args: {
    isDisabled: true,
  },
};
