import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { toaster } from "../lib/toaster";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleresetPassword = async () => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        toaster.create({
          title: "Error resetting password",
          description: error.message,
          type: "error",
        });
      } else {
        toaster.create({
          title: "Password reset email sent",
          description: "Check your email for a password reset link",
          type: "success",
        });
        navigate("/forgot-password");
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
      <Heading>Reset Password</Heading>
      <Box>
        <label>Email</label>
        <Input
          type="email"
          placeholder="Enter email"
          my={2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          onClick={handleresetPassword}
          variant="outline"
          colorPalette="brand"
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPassword;
