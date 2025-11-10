//Suspense fallback

import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
      <Spinner size={"xl"} color={"brand.500"} colorPalette={"brand"} />
    </Flex>
  );
};

export default Loader;
