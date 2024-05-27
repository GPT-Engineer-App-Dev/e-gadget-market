import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#">Home</Link>
          <Link href="#">Products</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact</Link>
        </HStack>
      <InputGroup maxW="300px" ml={4}>
          <Input placeholder="Search for products..." />
          <InputRightElement>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              onClick={() => console.log("Search functionality to be implemented")}
            />
          </InputRightElement>
        </InputGroup>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Image src="/images/hero-product.jpg" alt="Featured Product" mx="auto" />
      </Box>

      {/* Product Listing Section */}
      <Box as="section" py={20}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={4}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text>$299.99</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={4}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text>$399.99</Text>
            </Box>
          </Box>
          <Box bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={4}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text>$499.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} textAlign="center">
          <Box>
            <Heading size="md" mb={4}>ElectroShop</Heading>
            <Text>© 2023 ElectroShop. All rights reserved.</Text>
          </Box>
          <Box>
            <Heading size="md" mb={4}>Follow Us</Heading>
            <HStack spacing={4} justify="center">
              <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Box>
          <Box>
            <Heading size="md" mb={4}>Contact Us</Heading>
            <Text>Email: support@electroshop.com</Text>
            <Text>Phone: (123) 456-7890</Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;