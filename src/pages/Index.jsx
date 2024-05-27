import { Box, Container, Flex, Heading, Text, VStack, Image, SimpleGrid, Link, HStack, IconButton, Input, InputGroup, InputRightElement, Checkbox, CheckboxGroup, Stack, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Select } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  const products = [
    { id: 1, name: "Product 1", price: 299.99, brand: "Brand A", rating: 4, image: "/images/product1.jpg" },
    { id: 2, name: "Product 2", price: 399.99, brand: "Brand B", rating: 5, image: "/images/product2.jpg" },
    { id: 3, name: "Product 3", price: 499.99, brand: "Brand C", rating: 3, image: "/images/product3.jpg" },
  ];

  const filteredProducts = products.filter(product => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      (selectedRating === "" || product.rating >= parseInt(selectedRating))
    );
  });

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

      {/* Filter and Product Listing Section */}
      <Flex>
        <Box as="aside" width="20%" p={4} bg="gray.50">
          <Heading size="md" mb={4}>Filters</Heading>
          
          <Heading size="sm" mb={2}>Price Range</Heading>
          <RangeSlider
            aria-label={['min', 'max']}
            defaultValue={[0, 500]}
            min={0}
            max={500}
            step={10}
            onChangeEnd={(val) => setPriceRange(val)}
          >
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
          <Text mt={2}>${priceRange[0]} - ${priceRange[1]}</Text>

          <Heading size="sm" mt={4} mb={2}>Brand</Heading>
          <CheckboxGroup onChange={setSelectedBrands}>
            <Stack spacing={2}>
              <Checkbox value="Brand A">Brand A</Checkbox>
              <Checkbox value="Brand B">Brand B</Checkbox>
              <Checkbox value="Brand C">Brand C</Checkbox>
            </Stack>
          </CheckboxGroup>

          <Heading size="sm" mt={4} mb={2}>Rating</Heading>
          <Select placeholder="Select rating" onChange={(e) => setSelectedRating(e.target.value)}>
            <option value="1">1 Star & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars</option>
          </Select>
        </Box>

        <Box as="section" width="80%" py={20}>
          <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {filteredProducts.map(product => (
              <Box key={product.id} bg="white" boxShadow="md" borderRadius="md" overflow="hidden">
                <Image src={product.image} alt={product.name} />
                <Box p={4}>
                  <Heading size="md" mb={2}>{product.name}</Heading>
                  <Text>${product.price}</Text>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>

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