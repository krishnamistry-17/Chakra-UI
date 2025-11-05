import React, { useEffect } from "react";
import { MemoryRouter } from "react-router-dom";
import Product from "../pages/Product";
import { fn } from "storybook/test";
// Simple mock dataset for the Product page
const mockProducts = [
  {
    id: 1,
    title: "Classic Cotton T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/300x300.png?text=T-Shirt",
  },
  {
    id: 2,
    title: "Leather Wallet",
    price: 29.99,
    image: "https://via.placeholder.com/300x300.png?text=Wallet",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    price: 99.99,
    image: "https://via.placeholder.com/300x300.png?text=Headphones",
  },
  {
    id: 4,
    title: "Running Shoes",
    price: 79.99,
    image: "https://via.placeholder.com/300x300.png?text=Shoes",
  },
  {
    id: 5,
    title: "Stainless Water Bottle",
    price: 14.99,
    image: "https://via.placeholder.com/300x300.png?text=Bottle",
  },
  {
    id: 6,
    title: "Canvas Backpack",
    price: 49.99,
    image: "https://via.placeholder.com/300x300.png?text=Backpack",
  },
];

// Wraps stories with router context and a mocked fetch lifecycle
const StoryProviders = ({ scenario = "success", children }) => {
  useEffect(() => {
    const originalFetch = global.fetch;

    if (scenario === "success") {
      global.fetch = async () => ({
        json: async () => mockProducts,
      });
    } else if (scenario === "error") {
      global.fetch = async () => {
        throw new Error("Network error");
      };
    } else if (scenario === "loading") {
      // Never-resolving promise to keep the loading state visible
      // until the story is switched
      global.fetch = () => new Promise(() => {});
    }

    return () => {
      global.fetch = originalFetch;
    };
  }, [scenario]);

  return <MemoryRouter>{children}</MemoryRouter>;
};

export default {
  title: "Pages/Product",
  component: Product,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
  argTypes: {
    onClick: { action: "clicked product" },
  },
};

export const Default = {
  label: "Default",
};

export const Loading = {
  label: "Loading",
};

export const ErrorState = {
  label: "Error state",
};
