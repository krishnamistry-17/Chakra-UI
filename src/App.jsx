import { Box, Button, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="brand.50" color="brand.500" p={10} textAlign="center">
      <Text fontSize="2xl" mb={4}>
        Custom Chakra v3 Theme Example
      </Text>
      <Button colorPalette="brand" bg="brand.500" color="brand.50">
        Click Me
      </Button>
    </Box>
  );
}

export default App;
