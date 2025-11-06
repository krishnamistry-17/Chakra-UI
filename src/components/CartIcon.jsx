import { Box, Text, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

const CartIcon = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    const items = raw ? JSON.parse(raw) : [];
    setCartItems(items);

    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(updated);
    };
    window.addEventListener("storage", handleStorageChange);

    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Box position="relative">
      <LuShoppingCart size={20} />
      {cartItems.length > 0 && (
        <Text
          position="absolute"
          top="0"
          right="0"
          transform="translate(50%, -50%)"
          bg="red.500"
          color="white"
          fontSize="xs"
          fontWeight="bold"
          borderRadius="full"
          px={2}
          py={0.5}
          lineHeight="short"
          minW="18px"
          textAlign="center"
        >
          {cartItems.length}
        </Text>
      )}
    </Box>
  );
};

export default CartIcon;
