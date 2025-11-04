import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ColorModeButton } from "./ColorModeButton";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg={{ base: "bg", _dark: "bgDark" }} px={6} py={4} boxShadow="sm">
      <Flex justify="space-between" align="center">
        <Box fontWeight="bold" fontSize="xl" color="brand.500">
          MyChakraApp
        </Box>

        <Flex gap={6} display={{ base: "none", md: "flex" }}>
          <Link
            as={NavLink}
            to="/"
            _hover={{ textDecoration: "none", color: "brand.500" }}
          >
            Home
          </Link>
          <Link
            as={NavLink}
            to="/about"
            _hover={{ textDecoration: "none", color: "brand.500" }}
          >
            About
          </Link>
          <Link
            as={NavLink}
            to="/contact"
            _hover={{ textDecoration: "none", color: "brand.500" }}
          >
            Contact
          </Link>
        </Flex>

        <Flex align="center" gap={2}>
          <Box
            as={NavLink}
            to="/signin"
            display={{ base: "none", md: "block" }}
          >
            <Button variant="outline" colorPalette="brand">
              Sign In
            </Button>
          </Box>
          <Box
            as={NavLink}
            to="/signup"
            display={{ base: "none", md: "block" }}
          >
            <Button variant="outline" colorPalette="brand">
              Sign Up
            </Button>
          </Box>
          <ColorModeButton />
          {/* Menu icon only visible on small screens */}
          <Box display={{ base: "block", md: "none" }}>
            <Button
              onClick={toggleMenu}
              variant="ghost"
              aria-label="Toggle menu"
            >
              <LuMenu />
            </Button>
          </Box>
        </Flex>
      </Flex>

      {isOpen && (
        <Box mt={2} px={1} display={{ base: "block", md: "none" }}>
          <Flex direction="column" gap={2}>
            <Link
              as={NavLink}
              to="/"
              onClick={() => setIsOpen(false)}
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              Home
            </Link>
            <Link
              as={NavLink}
              to="/about"
              onClick={() => setIsOpen(false)}
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              About
            </Link>
            <Link
              as={NavLink}
              to="/contact"
              onClick={() => setIsOpen(false)}
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              Contact
            </Link>
            <Link
              as={NavLink}
              to="/signin"
              onClick={() => setIsOpen(false)}
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              Sign In
            </Link>
            <Link
              as={NavLink}
              to="/signup"
              onClick={() => setIsOpen(false)}
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              Sign Up
            </Link>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default Header;
