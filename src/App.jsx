// import { Box, Button, Text, Image, SimpleGrid } from "@chakra-ui/react";
// import { useState } from "react";
// import image from "./assets/images/image.png";

// function App() {
//   const [isClicked, setIsClicked] = useState(false);
//   const handleClick = () => {
//     setIsClicked(!isClicked);
//   };

//   return (
//     <>
//       <Box bg="brand.50" color="brand.600" p={10} textAlign="center">
//         <Text
//           fontSize="xl"
//           mb={4}
//           color="brand.600"
//           smToLg={{ color: "black" }}
//         >
//           Custom Chakra v3 Theme Example
//         </Text>
//         <Button
//           colorPalette="brand"
//           bg="brand.500"
//           color="brand.50"
//           onClick={handleClick}
//         >
//           {isClicked ? "Clicked" : "Click Me"}
//         </Button>
//       </Box>
//       <Box
//         w="350px"
//         h="200px"
//         margin="auto"
//         bg="brand.500"
//         color="brand.50"
//         isTruncated
//         overflow="scroll"
//         scrollbarWidth="none"
//       >
//         <Text fontSize="xl" color="brand.50" p="10px">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
//           aperiam doloremque exercitationem saepe, sed modi odit officia illum
//           iste vel? Rerum dignissimos pariatur, odit impedit iste aperiam facere
//           atque iure!{" "}
//         </Text>
//       </Box>

//       <SimpleGrid spaceY={10} mt={4} minChildWidth="410px">
//         <Box
//           w="200px"
//           h="200px"
//           mt="20px"
//           alignItems="center"
//           justifyContent="center"
//           margin="auto"
//         >
//           <Image src={image} alt="dummy" w="300px" h="200px" />
//           <Text fontSize="xl" p="10px">
//             Dummy Image
//           </Text>
//         </Box>
//         <Box
//           w="200px"
//           h="200px"
//           mt="20px"
//           alignItems="center"
//           justifyContent="center"
//           margin="auto"
//         >
//           <Image src={image} alt="dummy" w="300px" h="200px" />
//           <Text fontSize="xl" p="10px">
//             Dummy Image
//           </Text>
//         </Box>
//         <Box
//           w="200px"
//           h="200px"
//           mt="20px"
//           alignItems="center"
//           justifyContent="center"
//           margin="auto"
//         >
//           <Image src={image} alt="dummy" w="300px" h="200px" />
//           <Text fontSize="xl" p="10px">
//             Dummy Image
//           </Text>
//         </Box>
//       </SimpleGrid>
//     </>
//   );
// }

// export default App;

import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
