// stories/HomePage.stories.jsx
import Home from "../pages/Home.jsx";
import pricing from "../../utils/pricing.json";
import yearlypricing from "../../utils/yearlypricing.json";

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    pricingData: pricing,
    yearlypricingData: yearlypricing,
  },
};
