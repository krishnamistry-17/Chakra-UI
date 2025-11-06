import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { toaster } from "../lib/toaster";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleForgotpassword = async () => {
    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });
      if (error) {
        toaster.create({
          title: "Error resetting password",
          description: error.message,
          type: "error",
        });
      } else {
        toaster.create({
          title: "Password reset successfully",
          description: "You can now use your new password to sign in",
          type: "success",
        });
        navigate("/signin");
      }
    } catch (error) {
      toaster.create({
        title: "Error resetting password",
        description: error.message,
        type: "error",
      });
    }
  };
  return (
    <Box
      p={10}
      justifyContent="center"
      alignItems="center"
      display="flex"
      flexDirection="column"
    >
      <Heading>Forgot Password</Heading>
      <Box>
        <label>Email</label>
        <Input
          type="email"
          placeholder="Enter email"
          my={2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <Input
          type="password"
          placeholder="Enter password"
          my={2}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="outline"
          colorPalette="brand"
          onClick={handleForgotpassword}
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
