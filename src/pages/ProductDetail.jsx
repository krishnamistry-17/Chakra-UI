import { AspectRatio, Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ onViewProduct }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const handleViewProduct = () => {
    if (onViewProduct) onViewProduct(id);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      display="flex"
      flexDirection={["column", "row"]}
      alignItems="center"
      justifyContent="center"
      p={["4", "8"]}
      onClick={handleViewProduct}
    >
      <Box
        w="full"
        maxW="400px"
        mx="auto"
        borderRadius="2px"
        borderColor="gray.200"
      >
        <AspectRatio ratio={4 / 3}>
          <Image src={product.image} alt={product.title} objectFit="contain" />
        </AspectRatio>
      </Box>
      <Box mt={[8, 0]} ml={[0, 8]} w="full" maxW="500px">
        <Box fontSize={["lg", "xl", "2xl"]} fontWeight="bold" mb={2}>
          {product.title}
        </Box>
        <Box color="gray.600" mb={4}>
          {product.category}
        </Box>
        <Box fontWeight="semibold" fontSize="xl" mb={4}>
          ${product.price}
        </Box>
        <Box mb={4}>{product.description}</Box>
        {product.rating && (
          <Box>
            <Box as="span" fontWeight="semibold">
              Rating:
            </Box>{" "}
            {product.rating.rate} ({product.rating.count} reviews)
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetail;
