import Footer from "../components/Footer.jsx";

export default {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export const Default = {
  args: {
    year: new Date().getFullYear(),
  },
};
