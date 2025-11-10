import { Box, Text } from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

const CartIcon = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const syncCart = () => {
      const updated = JSON.parse(localStorage.getItem("cart")) || [];
      setCartItems(updated);
      console.log("cartItems in CartIcon", updated);
    };

    // initial sync
    syncCart();

    // sync on cross-tab storage changes and in-app updates
    window.addEventListener("storage", syncCart);
    window.addEventListener("cart-update", syncCart);

    return () => {
      window.removeEventListener("storage", syncCart);
      window.removeEventListener("cart-update", syncCart);
    };
  }, []);

  const cartItemsCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  console.log("cartItemsCount in CartIcon", cartItemsCount);

  return (
    <Box position="relative">
      <LuShoppingCart size={20} />
      {cartItemsCount > 0 && (
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
          {cartItemsCount}
        </Text>
      )}
    </Box>
  );
};

export default React.memo(CartIcon);
