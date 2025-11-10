import { Box, Flex, Button, Link } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { ColorModeButton } from "./ColorModeButton";
import { LuMenu } from "react-icons/lu";
import { LuUser } from "react-icons/lu";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsSignedIn } from "../store/authSlice";
import { clearSession } from "../store/authSlice";
import CartIcon from "./CartIcon";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = useCallback(() => {
    dispatch(clearSession());
    navigate("/");
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfileMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, []);

  const handleCart = useCallback(() => {
    navigate("/cart");
  }, []);

  const isSignedIn = useSelector(selectIsSignedIn);
  console.log("isSignedIn in header??????", isSignedIn);

  return (
    <>
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
            <Link
              as={NavLink}
              to="/pricing"
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              Subscribe
            </Link>
            <Link
              as={NavLink}
              to="/product"
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              Products
            </Link>
            <Link
              as={NavLink}
              to="/charts"
              _hover={{ textDecoration: "none", color: "brand.500" }}
            >
              Charts
            </Link>
          </Flex>

          <Flex align="center" gap={2}>
            {isSignedIn ? (
              <Box onClick={toggleProfileMenu} cursor="pointer">
                <LuUser />
              </Box>
            ) : (
              <>
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
              </>
            )}
            <ColorModeButton />
            <Box onClick={handleCart} cursor="pointer">
              <CartIcon />
            </Box>
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
                to="/pricing"
                onClick={() => setIsOpen(false)}
                _hover={{ textDecoration: "none", color: "brand.500" }}
              >
                Subscribe
              </Link>
              <Link
                as={NavLink}
                to="/product"
                onClick={() => setIsOpen(false)}
                _hover={{ textDecoration: "none", color: "brand.500" }}
              >
                Products
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
      {isMenuOpen && (
        <Box
          mt={2}
          position="absolute"
          top="58px"
          right="0px"
          width="150px"
          p={2}
          display="flex"
          flexDirection="column"
          gap={2}
        >
          <Link as={NavLink} to="/profile" onClick={() => setIsMenuOpen(false)}>
            <Button variant="outline">My Profile</Button>
          </Link>
          <Link as={NavLink} to="/orders" onClick={() => setIsMenuOpen(false)}>
            <Button variant="outline">My Orders</Button>
          </Link>
          <Link as={NavLink} to="/signout" onClick={() => setIsMenuOpen(false)}>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </Link>
        </Box>
      )}
    </>
  );
}

export default Header;
