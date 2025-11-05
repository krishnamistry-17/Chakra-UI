import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Text,
  Flex,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { useNavigate } from "react-router-dom";

const Product = ({ onClick }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  // Pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  if (loading) {
    return (
      <Flex align="center" justify="center" h="70vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex align="center" justify="center" h="70vh">
        <Text color="red.500">{error}</Text>
      </Flex>
    );
  }

  const handleProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Box maxW="7xl" mx="auto" py={10} px={[4, 6, 8]}>
      <Text fontSize="3xl" fontWeight="bold" mb={8} textAlign="center">
        Products
      </Text>

      <SimpleGrid columns={[1, 2, 3]} spacing={6} gap={4}>
        {currentItems.map((item) => (
          <Box
            key={item.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            boxShadow="md"
            onClick={() => {
              if (onClick) onClick(item);
              handleProductDetail(item.id);
            }}
          >
            <Flex justify="center" mb={4}>
              <Image
                src={item.image}
                alt={item.title}
                boxSize="150px"
                objectFit="contain"
              />
            </Flex>

            <Stack spacing={2}>
              <Text
                fontSize="md"
                fontWeight="semibold"
                noOfLines={2}
                minH="48px"
              >
                {item.title}
              </Text>

              <Text color="gray.500" fontWeight="medium">
                ${item.price.toFixed(2)}
              </Text>

              <Button
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
                mt={2}
              >
                Add to Cart
              </Button>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>

      {/* Pagination Section */}
      <Flex justify="center" mt={10}>
        <Pagination
          totalItems={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={page}
          onPageChange={setPage}
        />
      </Flex>
    </Box>
  );
};

export default Product;
