import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";

const SignUp = () => {
  return (
    <Box p={10}>
      <Heading mb={6} textAlign="center">
        {" "}
        Sign Up{" "}
      </Heading>
      <Stack spacing={4} maxW="md" mx="auto">
        <label htmlFor="name">
          Name<span style={{ color: "red" }}>*</span>
        </label>
        <Input id="name" placeholder="Your Name" />
        <label htmlFor="email">
          {" "}
          Email<span style={{ color: "red" }}>*</span>{" "}
        </label>
        <Input id="email" placeholder="Your Email" />
        <label htmlFor="password">
          Password<span style={{ color: "red" }}>*</span>
        </label>
        <Input id="password" placeholder="Your Password" />
        <Button colorPalette="brand">Sign Up</Button>
        <Text textAlign="center">
          Already have an account?{" "}
          <Link href="/signin" variant="underline">
            Sign In
          </Link>
        </Text>
      </Stack>
    </Box>
  );
};

export default SignUp;
