import Loader from "../components/Loader";

export default {
  title: "Components/Loader",
  component: Loader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    color: {
      contro: { type: "color" },
    },
  },
};

export const Default = {
  label: "Default",
  args: {
    size: "md",
    color: "brand.500",
  },
};

export const CustomColor = {
  label: "Custom color",
  args: {
    size: "md",
    color: "red.500",
  },
};
