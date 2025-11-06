import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/authSlice";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = useSelector(selectUser);
  console.log("user in profile", user);
  return (
    <Box px={4}>
      <Box my={4}>
        <Flex justify="space-between" align="center">
          <Heading>Profile</Heading>
          <Button
            variant="outline"
            colorPalette="brand"
            as={Link}
            to="/edit-profile"
          >
            Edit Profile
          </Button>
        </Flex>
      </Box>
      <Text>Email: {user.email}</Text>
    </Box>
  );
};

export default Profile;
