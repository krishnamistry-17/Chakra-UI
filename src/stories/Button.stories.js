import { Button } from "@chakra-ui/react";

export default {
  title: "Button",
  component: Button,
};

export const Primary = {
  args: {
    label: "Click me for test",
    onclick: () => console.log("Primary button clicked"),
  },
};

export const Secondary = {
  ags: {
    label: "Click me for test",
    variant: "secondary",
    size: "medium",
    onclick: () => {
      console.log("Secondary button clicked");
    },
  },
};

