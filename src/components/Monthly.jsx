import { Box, Button, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import pricing from "../../utils/pricing.json";

const Mothly = () => {
  const [pricingData, setPricingData] = useState(pricing);

  useEffect(() => {
    setPricingData(pricing);
  }, []);

  return (
    <SimpleGrid columns={[1, 1, 3]} spacing={8} gap={8} justifyItems="center">
      <Box
        borderRadius="2px"
        borderColor="gray.200"
        borderWidth="1px"
        shadow="sm"
        p={4}
        w="full"
        maxW="360px"
      >
        <Heading fontSize={["lg", "xl", "2xl"]}>Basic</Heading>
        {pricingData?.map((item, index) => {
          if (item?.id === 1) {
            return (
              <Box key={index}>
                <Text fontSize={["lg", "xl", "2xl"]} mt={2}>
                  {item?.price}
                  <span style={{ fontSize: "sm" }}> {item?.seat}</span>
                </Text>
              </Box>
            );
          }
        })}
        <Button
          colorPalette="brand"
          bg="brand.700"
          color="brand.50"
          w="100%"
          mt={2}
        >
          Get Started
        </Button>
        <Box my={3}>
          <hr style={{ border: "1px solid #e0e0e0" }} />
        </Box>
        <Box mt={4}>
          {pricingData?.map((item, index) => {
            if (item?.id === 1) {
              return (
                <Box>
                  {item?.features?.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </Box>
              );
            }
          })}
        </Box>
      </Box>
      <Box
        borderRadius="2px"
        borderColor="gray.200"
        borderWidth="1px"
        shadow="sm"
        p={4}
        w="full"
        maxW="360px"
      >
        <Heading>Premium</Heading>
        {pricingData?.map((item, index) => {
          if (item?.id === 2) {
            return (
              <Box key={index}>
                <Text fontSize={["lg", "xl", "2xl"]} mt={2}>
                  {item?.price}
                  <span style={{ fontSize: "sm" }}> {item?.seat}</span>
                </Text>
              </Box>
            );
          }
        })}
        <Button
          colorPalette="brand"
          bg="brand.700"
          color="brand.50"
          w="100%"
          mt={2}
        >
          Get Started
        </Button>
        <Box my={3}>
          <hr style={{ border: "1px solid #e0e0e0" }} />
        </Box>
        <Box mt={4}>
          {pricingData?.map((item, index) => {
            if (item?.id === 2) {
              return (
                <Box>
                  {item?.features?.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </Box>
              );
            }
          })}
        </Box>
      </Box>
      <Box
        borderRadius="2px"
        borderColor="gray.200"
        borderWidth="1px"
        shadow="sm"
        p={4}
        w="full"
        maxW="360px"
      >
        <Heading>Enterprise</Heading>
        {pricingData?.map((item, index) => {
          if (item?.id === 3) {
            return (
              <Box key={index}>
                <Text fontSize={["lg", "xl", "2xl"]} mt={2}>
                  {item?.price}
                </Text>
              </Box>
            );
          }
        })}
        <Button variant="outline" w="100%" mt={2}>
          Contact sales
        </Button>
        <Box my={3}>
          <hr style={{ border: "1px solid #e0e0e0" }} />
        </Box>
        <Box mt={4}>
          {pricingData?.map((item, index) => {
            if (item?.id === 3) {
              return (
                <Box>
                  {item?.features?.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </Box>
              );
            }
          })}
        </Box>
      </Box>
    </SimpleGrid>
  );
};

export default Mothly;
