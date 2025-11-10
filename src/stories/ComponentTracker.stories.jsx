import MouseTracker from "../components/ComponentTracker";
import { fn } from "storybook/test";

export default {
  title: "Components/ComponentTracker",
  component: MouseTracker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    render: { action: "render" },
  },
};

export const Default = {
  label: "Default",
  args: {
    render: fn(),
  },
};
