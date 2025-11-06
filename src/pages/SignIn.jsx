import {
  Box,
  Button,
  Heading,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { toaster } from "../lib/toaster";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (!email || !password) {
      toaster.create({
        title: "Missing fields",
        description: "Email and password are required",
        type: "error",
      });
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        toaster.create({
          title: "Sign in failed",
          description: "Invalid email or password",
          type: "error",
        });
      } else {
        toaster.create({ title: "Signed in successfully", type: "success" });
        navigate("/");
      }
    } catch (err) {
      toaster.create({
        title: "Unexpected error",
        description: "Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box p={10}>
      <Heading mb={6} textAlign="center">
        Sign In
      </Heading>
      <Stack spacing={4} maxW="md" mx="auto">
        <label htmlFor="email">
          Email<span style={{ color: "red" }}>*</span>{" "}
        </label>
        <Input
          id="email"
          placeholder="Your Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">
          Password<span style={{ color: "red" }}>*</span>
        </label>
        <Input
          id="password"
          placeholder="Your Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Text>
          Forgot password?{" "}
          <Link href="/reset-password" variant="underline">
            Reset Password
          </Link>
        </Text>

        <Button
          onClick={handleSignIn}
          isLoading={isSubmitting}
          colorPalette="brand"
        >
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
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
