import {
  Box,
  Button,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SignIn = () => {
  return (
    <Box p={10}>
      <Heading mb={6} textAlign="center">
        Sign In
      </Heading>
      <Stack spacing={4} maxW="md" mx="auto">
        <label htmlFor="email">
          Email<span style={{ color: "red" }}>*</span>{" "}
        </label>
        <Input id="email" placeholder="Your Email" />
        <label htmlFor="password">
          Password<span style={{ color: "red" }}>*</span>
        </label>
        <Input id="password" placeholder="Your Password" />
        <Button colorPalette="brand">Sign In</Button>
        <Text textAlign="center">
          Don't have an account?{" "}
          <Link href="/signup" variant="underline">
            Sign Up
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default SignIn;
