import {
  Box,
  Heading,
  Input,
  Button,
  Stack,
  Flex,
  SimpleGrid,
  Image,
  Text,
  Separator,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    const items = raw ? JSON.parse(raw) : [];
    setProduct(items);
  }, []);

  const total = useMemo(() => {
    return product.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [product]);

  const items = [
    { id: 1, name: "Credit Card", value: "credit-card" },
    { id: 2, name: "Debit Card", value: "debit-card" },
    { id: 3, name: "Paypal", value: "paypal" },
    { id: 4, name: "Bank Transfer", value: "bank-transfer" },
    { id: 5, name: "Cash", value: "cash" },
  ];

  const description = [
    {
      id: 1,
      value: "credit-card",
      description: "we will send you a link to pay with credit card",
    },
    {
      id: 2,
      value: "debit-card",
      description: "we will send you a link to pay with debit card",
    },
    {
      id: 3,
      value: "paypal",
      description: "we will send you a link to pay with paypal",
    },
    {
      id: 4,
      value: "bank-transfer",
      description: "we will send you a link to pay with bank transfer",
    },
    {
      id: 5,
      value: "cash",
      description:
        "You will receive a call from our representative to confirm your order",
    },
  ];

  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing={4}
      justifyItems="center"
      maxW="7xl"
      mx="auto"
    >
      <Box p={4} w="full">
        <Heading mb={6} textAlign="center">
          Checkout
        </Heading>
        <Stack spacing={4} maxW="2xl" mx="auto">
          <label htmlFor="name">
            Name<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="name" placeholder="Your Name" />

          <label htmlFor="email">
            Email<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="email" placeholder="Your Email" />

          <label htmlFor="address">
            Address<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="address" placeholder="Your Address" />

          <label htmlFor="city">
            City<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="city" placeholder="Your City" />

          <label htmlFor="state">
            State<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="state" placeholder="Your State" />

          <label htmlFor="zip">
            Zip<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="zip" placeholder="Your Zip" />

          <label htmlFor="country">
            Country<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="country" placeholder="Your Country" />

          <label htmlFor="phone">
            Phone<span style={{ color: "red" }}>*</span>
          </label>
          <Input id="phone" placeholder="Your Phone" />

          <label htmlFor="email">
            Email<span style={{ color: "red" }}>*</span>
          </label>

          <Input id="email" placeholder="Your Email" />
        </Stack>{" "}
        <Button
          colorPalette="brand"
          my={4}
          variant="outline"
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </Button>
      </Box>
      <Box p={4} w="full">
        <Heading mb={6} textAlign="center">
          Order Summary
        </Heading>
        <Stack>
          {product.map((item) => (
            <Box key={item.id}>
              <Flex alignItems="center" gap={4}>
                <Image
                  src={item.image}
                  alt={item.title}
                  boxSize="60px"
                  objectFit="contain"
                />
                <Box>
                  <Text>{item.title}</Text>
                  <Text>${item.price}</Text>
                  <Text>Quantity: {item.quantity}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
          <Text>Total: ${total}</Text>
          {/* <hr style={{ border: "1px solid #e0e0e0" }} /> */}
          <Separator />
          <Box my={4}>
            <Heading size="md" mb={2}>
              Payment Method
            </Heading>
            <Stack direction="column">
              {items.map((item) => (
                <Box key={item.id}>
                  <Flex align="center" gap={2}>
                    <input
                      type="radio"
                      name="payment"
                      style={{ cursor: "pointer" }}
                      value={item.value}
                      checked={paymentMethod === item.value}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    <Text>{item.name}</Text>
                  </Flex>
                  {paymentMethod === item.value && (
                    <Text>
                      {
                        description.find((desc) => desc.value === item.value)
                          ?.description
                      }
                    </Text>
                  )}
                </Box>
              ))}
            </Stack>
            <Button
              colorPalette="brand"
              my={4}
              variant="outline"
              onClick={() => navigate("/orders")}
            >
              Place Order
            </Button>
          </Box>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default Checkout;
