import { Box, Heading, Input, Button, Stack } from "@chakra-ui/react";

function Contact() {
  return (
    <Box p={10}>
      <Heading mb={6} textAlign="center">
        Contact Us
      </Heading>
      <Stack spacing={4} maxW="md" mx="auto">
        <label htmlFor="name" textAlign="left">
          Name<span style={{ color: "red" }}>*</span>
        </label>
        <Input id="name" placeholder="Your Name" />
        <label htmlFor="email">
          Email<span style={{ color: "red" }}>*</span>{" "}
        </label>
        <Input id="email" placeholder="Your Email" />
        <label htmlFor="message">
          Message<span style={{ color: "red" }}>*</span>
        </label>
        <Input id="message" placeholder="Message" />
        <Button colorPalette="brand">Send Message</Button>
      </Stack>
    </Box>
  );
}

export default Contact;
