import { fn } from "storybook/test";
import ProductDetail from "../pages/ProductDetail";

const mockProduct = [
  {
    id: 1,
    title: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/300x300.png?text=Product",
    description: "Product description",
    category: "Category",
    rating: { rate: 4.5, count: 100 },
  },
];

const StoryProviders = ({ scenario = "success", children }) => {
  useEffect(() => {
    const originalFetch = global.fetch;
    if (scenario === "success") {
      global.fetch = async () => ({ json: async () => mockProduct });
    }
  }, [scenario]);
  return <MemoryRouter>{children}</MemoryRouter>;
};

export default {
  title: "Pages/ProductDetail",
  component: ProductDetail,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onViewProduct: fn(),
  },
  argTypes: {
    onClick: { action: "Product viewed" },
  },
};

export const Default = {
  label: "Default",
};

export const ProductViewd = {
  label: "Product viewed",
  argTypes: {
    onViewProduct: { action: "Product viewd" },
  },    
};

export const Loading = {
  label: "Loading",
};

export const Error = {
  label: "Error",
};
