import Checkout from "../pages/Checkout";

export default {
  title: "Pages/Checkout",
  component: Checkout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export const Default = {
  label: "Default",
};

export const PaymentMehtod = {
  label: "Payment Method",
  args: {
    paymentMethod: "credit-card",
  },
  argTypes: {
    paymentMethod: {
      control: "select",
      options: ["credit-card", "debit-card", "paypal", "bank-transfer", "cash"],
      defaultValue: "credit-card",
      description: "Select the payment method",
    },
  },
};
