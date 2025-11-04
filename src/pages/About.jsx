import { Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";
import image from "../assets/images/image.png";

const About = () => {
  return (
    <Box textAlign="center" p={5}>
      <Heading mb={6}>About Us</Heading>
      <Text mb={6}>
        We are a team of developers who are passionate about creating beautiful
        and functional websites.
      </Text>
      <Image
        src={image}
        alt="about"
        w="300px"
        h="200px"
        margin="auto"
        borderRadius="10px"
      />
    </Box>
  );
};

export default About;
