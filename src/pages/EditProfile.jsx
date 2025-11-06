import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/authSlice";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { toaster } from "../lib/toaster";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

//store change email to databse
const EditProfile = () => {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleEditEmail = async () => {
    try {
      setIsSubmitting(true);
      const { error } = await supabase.auth.updateUser({
        email,
      });
      if (error) {
        toaster.create({
          title: "Error editing email",
          description: error.message,
          type: "error",
        });
      } else {
        toaster.create({
          title: "Email edited successfully",
          description: "You can now use your new email to sign in",
          type: "success",
        });
        setEmail("");
        navigate("/signin");
      }
    } catch (error) {
      toaster.create({
        title: "Error editing email",
        description: error.message,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
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
      <Heading mb={6} textAlign="center">
        Edit Profile
      </Heading>
      <Box
        w="50%"
        mx="auto"
        border="1px solid"
        borderColor="gray.200"
        borderRadius="md"
        p={4}
      >
        <label>Edit email</label>
        <Input
          type="email"
          placeholder="Enter email"
          my={2}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button variant="outline" onClick={handleEditEmail}>
          Edit
        </Button>
      </Box>
    </Box>
  );
};

export default EditProfile;
