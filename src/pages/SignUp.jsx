import { Box, Button, Heading, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { supabase } from "../lib/supabaseClient";
import { toaster } from "../lib/toaster";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
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
      const { error, data } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        toaster.create({
          title: "Sign up failed",
          description: error.message,
          type: "error",
        });
      } else {
        // If email confirmations are enabled, Supabase sends a verification email.
        // If not, a session may be returned automatically.
        if (data?.user?.email) {
          toaster.create({
            title: "Verification email sent",
            description:
              "Check your email for a verification link to complete sign up.",
            type: "info",
          });
          navigate("/signin");
        } else {
          toaster.create({
            title: "Sign up successful",
            description: "You can now sign in to your account.",
            type: "success",
          });
          navigate("/signin");
        }
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
        Sign Up
      </Heading>
      <Stack spacing={4} maxW="md" mx="auto">
        <label htmlFor="name">
          Name<span style={{ color: "red" }}>*</span>
        </label>
        <Input
          id="name"
          placeholder="Your Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <Button
          onClick={handleSignUp}
          isLoading={isSubmitting}
          colorPalette="brand"
        >
          {isSubmitting ? "Signing Up..." : "Sign Up"}
        </Button>
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
