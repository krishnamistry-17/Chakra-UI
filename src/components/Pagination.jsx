import React from "react";
import { Button, ButtonGroup, Flex, IconButton, Text } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null; 

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Flex align="center" justify="center" mt={4} gap={2}>
      <Button
        onClick={handlePrev}
        isDisabled={currentPage === 1}
        variant="outline"
        aria-label="Previous page"
        size="sm"
      >
        <LuChevronLeft />
      </Button>

      <ButtonGroup isAttached variant="outline" size="sm">
        {getPageNumbers().map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            bg={page === currentPage ? "blue.500" : "transparent"}
            color={page === currentPage ? "white" : "gray.700"}
            _hover={{
              bg: page === currentPage ? "blue.600" : "gray.100",
            }}
          >
            {page}
          </Button>
        ))}
      </ButtonGroup>

      <Button
        onClick={handleNext}
        isDisabled={currentPage === totalPages}
        variant="outline"
        aria-label="Next page"
        size="sm"
      >
        <LuChevronRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
