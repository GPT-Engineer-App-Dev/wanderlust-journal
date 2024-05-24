import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Divider } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">My Blog</Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Home</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>About</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Blog</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Contact</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" mt={8} mb={8}>
        <Flex direction={{ base: "column", md: "row" }} gap={8}>
          {/* Blog Posts Section */}
          <Box flex="3">
            <VStack spacing={8} align="stretch">
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Blog Post Title</Heading>
                <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px">
                <Heading fontSize="xl">Another Blog Post</Heading>
                <Text mt={4}>This is another summary of a blog post. Click to read more...</Text>
              </Box>
            </VStack>
          </Box>

          {/* Sidebar */}
          <Box flex="1" p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="lg" mb={4}>Recent Posts</Heading>
            <VStack align="stretch" spacing={4}>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 1</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 2</Link>
              <Link href="#" _hover={{ textDecoration: "none", color: "brand.700" }}>Recent Post 3</Link>
            </VStack>
          </Box>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Text>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#" _hover={{ color: "brand.700" }}><FaTwitter /></Link>
              <Link href="#" _hover={{ color: "brand.700" }}><FaFacebook /></Link>
              <Link href="#" _hover={{ color: "brand.700" }}><FaInstagram /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;