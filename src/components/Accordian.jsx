import { AccordionItem, Box, Button, Heading } from "@chakra-ui/react";
import React from "react";

const Accordian = () => {
  const accordianItems = [
    {
      title: "About Us",
      content:
        "We are a team of developers who are passionate about creating beautiful and functional websites.",
    },
    {
      title: "Our Mission",
      content:
        "Our mission is to provide the best possible service to our clients.",
    },
    {
      title: "Our Vision",
      content: "Our vision is to be the best company in the world.",
    },
  ];
  return (
    <Box>
      <Heading>Accordian</Heading>
    </Box>
  );
};

export default Accordian;
