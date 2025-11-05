import React from "react";
import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";

export default {
  title: "Theme/Tokens",
  parameters: {
    layout: "fullscreen",   
  },
  tags: ["autodocs"],
};

const ColorSwatch = ({ name }) => (
  <HStack spacing={3} mr={4} mb={4}>
    <Box boxSize="32px" borderRadius="md" borderWidth="1px" bg={name} />
    <Text fontFamily="mono" fontSize="sm">
      {name}
    </Text>
  </HStack>
);

export const Colors = {
  render: () => (
    <Stack p={6} spacing={6}>
      <Heading size="md">Brand</Heading>
      <HStack wrap="wrap" alignItems="flex-start">
        {[
          "brand.50",
          "brand.100",
          "brand.200",
          "brand.300",
          "brand.400",
          "brand.500",
          "brand.600",
          "brand.700",
          "brand.800",
          "brand.900",
        ].map((name) => (
          <ColorSwatch key={name} name={name} />
        ))}
      </HStack>

      <Heading size="md">Base</Heading>
      <HStack wrap="wrap" alignItems="flex-start">
        {["bg", "fg", "bgDark", "fgDark"].map((name) => (
          <ColorSwatch key={name} name={name} />
        ))}
      </HStack>
    </Stack>
  ),
};
