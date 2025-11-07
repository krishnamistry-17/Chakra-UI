import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("cart");
    const items = raw ? JSON.parse(raw) : [];
    setOrderData(items);
  }, []);

  return (
    <Box>
      <Heading>Your Orders</Heading>
      <Stack>
        <Box
          borderRadius={"2px"}
          borderWidth={"1px"}
          borderColor={"gray.200"}
          p={4}
          
          mx={4}
        >
          {orderData?.map((item, index) => (
            <Box key={index}>
              <Flex gap={4}>
                <Image
                  src={item.image}
                  alt={item.title}
                  boxSize={"60px"}
                  objectFit={"contain"}
                />
                <Box>
                  <Text>{item.title}</Text>
                  <Text>{item.price}</Text>
                  <Text>{item.quantity}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default Orders;
