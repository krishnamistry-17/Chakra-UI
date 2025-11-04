import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      as="footer"
      bg={{ base: "bg", _dark: "bgDark" }}
      py={4}
      textAlign="center"
    >
      <Text fontSize="sm" color="gray.500">
        © {new Date().getFullYear()} MyChakraApp — All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
