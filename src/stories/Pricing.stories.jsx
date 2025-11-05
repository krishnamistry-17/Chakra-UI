import PricingPage from "../pages/PricingPage";
import pricing from "../../utils/pricing.json";
import yearlypricing from "../../utils/yearlypricing.json";

export default {
  title: "Pages/Pricing",
  component: PricingPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    pricingData: pricing,
    yearlypricing: yearlypricing,
  },
  argTypes: {
    pricingData: { control: "object" },
    yearlypricing: { control: "object" },
    onTabChange: { action: "Tab changed" },
  },
};

export const Default = {
  label: "Default",
};

export const Loading = {
  label: "Loading",
};

export const Error = {
  label: "Error",
};
