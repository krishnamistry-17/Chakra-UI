import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { toaster } from "../lib/toaster";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      const items = raw ? JSON.parse(raw) : [];
      setCartData(items);
    } catch (error) {
      toaster.create({
        title: "Error loading cart",
        description: error.message,
        type: "error",
      });
    }
  }, []);

  const total = useMemo(() => {
    return cartData.reduce(
      (sum, item) => sum + item.price * (item.quantity || 1),
      0
    );
  }, [cartData]);

  const handleClear = () => {
    localStorage.removeItem("cart");
    setCartData([]);
  };

  const handleQuantityChange = (id, quantity) => {
    const raw = localStorage.getItem("cart");
    const items = raw ? JSON.parse(raw) : [];
    const index = items.findIndex((item) => item.id === id);
    if (index >= 0) {
      items[index].quantity = quantity;
    }
    localStorage.setItem("cart", JSON.stringify(items));
    setCartData(items);
  };

  return (
    <Box maxW="7xl" mx="auto" py={10} px={[4, 6, 8]}>
      <Heading mb={6}>Your Cart</Heading>
      {cartData.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <Stack spacing={4}>
          {cartData.map((item) => (
            <Flex
              key={item.id}
              align="center"
              gap={4}
              borderWidth="1px"
              p={3}
              borderRadius="md"
            >
              <Image
                src={item.image}
                alt={item.title}
                boxSize="60px"
                objectFit="contain"
              />
              <Box flex="1">
                <Text fontWeight="semibold">{item.title}</Text>
                <Flex align="center" gap={4}>
                  <Text color="gray.600">
                    ${item.price.toFixed(2)} × {item.quantity || 1}
                  </Text>
                  <Flex align="center" gap={2}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </Button>
                    <Text>{item.quantity || 1}</Text>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </Button>
                  </Flex>
                </Flex>
              </Box>
              <Text fontWeight="bold">
                ${(item.price * (item.quantity || 1)).toFixed(2)}
              </Text>
            </Flex>
          ))}
          <Flex justify="space-between" align="center" mt={4}>
            <Text fontSize="lg" fontWeight="bold">
              Total: ${total.toFixed(2)}
            </Text>
            <Button variant="outline" onClick={handleClear}>
              Clear Cart
            </Button>
          </Flex>
        </Stack>
      )}
    </Box>
  );
};

export default Cart;
