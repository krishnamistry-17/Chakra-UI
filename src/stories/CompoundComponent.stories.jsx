import Compoundcomponent from "../components/Compoundcomponent";

export default {
  title: "Components/CompoundComponent",
  component: Compoundcomponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    activeTab: {
      control: { type: "select" },
      options: ["Tab 1", "Tab 2"],
    },
  },
};

export const Default = {
  label: "Default",
  args: {
    activeTab: "Tab 1",
  },
};
