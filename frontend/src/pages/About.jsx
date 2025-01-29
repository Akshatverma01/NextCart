import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Button,
  VStack,
  HStack,
  SimpleGrid,
  Divider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUpload, FaShoppingCart, FaUsers, FaStar } from "react-icons/fa";
import aboutBg from "../assets/aboutBg.png";
import shopping from "../assets/shopping.jpg";

const AboutUs = () => {
  return (
    <Box
      minH="100vh"
      py={10}
      px={10}
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.100")}
    >
      {/* Hero Section */}
      <Box
        bgImage={aboutBg}
        bgSize="cover"
        bgPosition="center"
        position="relative"
        py={40}
        px={10}
        color="white"
        textAlign="center"
        mx={"auto"}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "blackAlpha.600",
          opacity: 0.9,
          zIndex: 1,
        }}
      >
        <Box position="relative" zIndex={2}>
          <Heading size="2xl">Welcome to NextCart</Heading>
          <Text fontSize="lg" mt={4}>
            Empowering entrepreneurs and businesses with seamless product
            management and e-commerce solutions.
          </Text>
          <Button
            mt={5}
            size="lg"
            colorScheme="teal"
            onClick={() => alert("Get Started Today!")}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Box
        maxW="1200px"
        mx="auto"
        py={10}
        color={useColorModeValue("gray.700", "gray.100")}
      >
        <HStack
          spacing={10}
          flexDirection={{ base: "column", md: "column" }}
          textAlign={"justify"}
        >
          <VStack spacing={5} align="center" textAlign="justify" mb={10}>
            <Heading
              as={"h1"}
              size="2xl"
              color={useColorModeValue("teal.700", "teal.400")}
              mb={10}
            >
              About Us - NextCart: Revolutionizing E-commerce
            </Heading>

            <Text fontSize="2xl">
              <b>
                {" "}
                Welcome to NextCart! We’re your ultimate shopping and delivery
                partner
              </b>
              , providing seamless e-commerce services to both customers and
              sellers. From shopping to delivery, NextCart redefines
              convenience, innovation, and trust. In a world where convenience
              meets innovation, NextCart emerges as the definitive e-commerce
              platform that transforms how you shop and receive your products.
              Whether you’re a customer looking for seamless shopping or a
              seller aiming to reach a wider audience, NextCart bridges the gap
              between convenience, quality, and technology. From browsing your
              favorite items to doorstep delivery, NextCart is here to redefine
              the e-commerce experience.
            </Text>
          </VStack>

          <VStack flex="1" alignItems="flex-start" spacing={5}>
            <Image
              src={shopping}
              alt="About Us"
              objectFit="cover"
              borderRadius="lg"
              shadow="lg"
              w="80%"
              h="500px"
              flex="1"
            />
            <VStack flex="1">
              <Heading
                size="2xl"
                textAlign={"center"}
                color={useColorModeValue("teal.700", "teal.400")}
              >
                Our Mission
              </Heading>
              <Text fontSize="2xl">
                At NextCart, we aim to simplify the e-commerce journey for
                entrepreneurs and businesses by providing easy-to-use tools for
                product uploads, management, and service access. Our platform is
                designed to help businesses grow their online presence and reach
                their full potential.
              </Text>
              <Text fontSize="2xl">
                With a focus on quality, innovation, and customer satisfaction,
                we strive to make e-commerce accessible for everyone.
              </Text>
            </VStack>
          </VStack>
          <Divider />
          <VStack spacing={5} align="center" textAlign="justify" mb={10}>
            <Heading
              as={"h1"}
              size="2xl"
              color={useColorModeValue("teal.700", "teal.400")}
            >
              Why Choose NextCart?
            </Heading>

            <VStack spacing={5} align="flex-start" textAlign="justify">
              <Heading as={"h6"} size={"lg"}>
                1. A Shopper's Paradise
              </Heading>
              <Text fontSize="2xl">
                At NextCart, shopping is more than just adding items to your
                cart; it’s an experience. Our user-friendly interface makes
                browsing effortless, whether you’re on a mobile device or a
                desktop. Here’s why shoppers love us:
                <ul>
                  <li>
                    <b>A Vast Product Selection:</b> From groceries and
                    electronics to clothing and home essentials, we offer
                    millions of products to suit your every need.
                  </li>
                  <li>
                    <b>Personalized Recommendations:</b> We use advanced
                    algorithms to suggest products based on your preferences,
                    making your shopping journey tailored and intuitive.
                  </li>
                  <li>
                    <b>Secure Payments:</b> Shop with confidence, knowing that
                    your transactions are protected with the latest encryption
                    technologies.
                  </li>
                </ul>
              </Text>
            </VStack>

            <VStack spacing={5} align="flex-start" textAlign="justify">
              <Heading as={"h6"} size={"lg"}>
                2. Fast and Reliable Delivery
              </Heading>
              <Text fontSize="2xl">
                In the fast-paced world we live in, waiting for deliveries can
                be frustrating. That’s why NextCart ensures that your orders
                reach you as quickly as possible. With our next-day delivery,
                same-day delivery, and real-time order tracking, you’re always
                in control. Our partnership with top-tier logistics providers
                ensures your products arrive safely and on time.
              </Text>
            </VStack>

            <VStack spacing={5} align="flex-start" textAlign="justify">
              <Heading as={"h6"} size={"lg"}>
                3. Empowering Sellers
              </Heading>
              <Text fontSize="2xl">
                NextCart isn’t just about shopping; it’s about creating
                opportunities for businesses to thrive. Whether you're a small
                business owner or an established brand, our platform provides:
                <ul>
                  <li>
                    <b> Easy Product Uploads: </b>Manage your inventory
                    effortlessly with our seller-friendly dashboard.
                  </li>
                  <li>
                    <b>Wider Reach:</b> Tap into a growing network of millions
                    of customers across various regions.
                  </li>
                  <li>
                    <b>Comprehensive Analytics: </b> Gain valuable insights into
                    your sales, customer behavior, and product performance.
                  </li>
                </ul>
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </Box>

      {/* Services Section */}
      <Box
        bg={useColorModeValue("gray.50", "gray.700")}
        color={useColorModeValue("gray.700", "gray.100")}
        py={10}
      >
        <Box maxW="1200px" mx="auto" textAlign="center" py={5}>
          <Heading
            size="2xl"
            mb={10}
            color={useColorModeValue("gray.700", "gray.100")}
          >
            Our Services
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <VStack
              bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.100")}
              borderRadius="lg"
              shadow="md"
              p={5}
              alignItems="center"
            >
              <Icon as={FaUpload} w={10} h={10} color="teal.500" />
              <Heading size="md" mt={4}>
                Easy Product Uploads
              </Heading>
              <Text textAlign="center">
                Effortlessly upload and manage your products with our
                user-friendly tools.
              </Text>
            </VStack>
            <VStack
              bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.100")}
              borderRadius="lg"
              shadow="md"
              p={5}
              alignItems="center"
            >
              <Icon as={FaShoppingCart} w={10} h={10} color="teal.500" />
              <Heading size="md" mt={4}>
                E-Commerce Solutions
              </Heading>
              <Text textAlign="center">
                Access tailored solutions to grow your online store.
              </Text>
            </VStack>
            <VStack
              bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.100")}
              borderRadius="lg"
              shadow="md"
              p={5}
              alignItems="center"
            >
              <Icon as={FaUsers} w={10} h={10} color="teal.500" />
              <Heading size="md" mt={4}>
                Customer Support
              </Heading>
              <Text textAlign="center">
                Dedicated support to assist you every step of the way.
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Statistics Section */}
      <Box maxW="1200px" mx="auto" py={10} textAlign="center">
        <Heading size="lg" mb={5}>
          Trusted by Thousands
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <VStack>
            <Heading size="2xl" color="teal.500">
              10K+
            </Heading>
            <Text>Products Uploaded</Text>
          </VStack>
          <VStack>
            <Heading size="2xl" color="teal.500">
              5K+
            </Heading>
            <Text>Happy Customers</Text>
          </VStack>
          <VStack>
            <Heading size="2xl" color="teal.500">
              4.9/5
            </Heading>
            <Text>Customer Ratings</Text>
          </VStack>
          <VStack>
            <Heading size="2xl" color="teal.500">
              50+
            </Heading>
            <Text>Countries Served</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box
        bg={useColorModeValue("gray.50", "gray.700")}
        color={useColorModeValue("gray.700", "gray.100")}
        py={10}
      >
        <Box maxW="1200px" mx="auto" textAlign="center" >
          <Heading size="2xl" mb={10}>
            What Our Clients Say
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack
              bg={useColorModeValue("whiteAlpha.300", "whiteAlpha.100")}
              borderRadius="lg"
              shadow="md"
              p={5}
              alignItems="flex-start"
            >
              <Text fontSize="lg">
                "NextCart made it incredibly easy for us to manage our products
                and grow our store. Their support team is amazing!"
              </Text>
              <Text fontSize="sm" mt={2} color="teal.500">
                - John Doe, Business Owner
              </Text>
            </VStack>
            <VStack
              bg={useColorModeValue("whiteAlpha.600", "whiteAlpha.100")}
              borderRadius="lg"
              shadow="md"
              p={5}
              alignItems="flex-start"
            >
              <Text fontSize="lg">
                "The e-commerce solutions provided by NextCart are top-notch.
                Highly recommend it to all entrepreneurs!"
              </Text>
              <Text fontSize="sm" mt={2} color="teal.500">
                - Jane Smith, Entrepreneur
              </Text>
            </VStack>
          </SimpleGrid>
        </Box>
      </Box>

      {/* Call-to-Action Section */}
      <Box bg="teal.500" py={10} color="white">
        <Box maxW="1200px" mx="auto" textAlign="center">
          <Heading size="lg">Ready to Start with NextCart?</Heading>
          <Text fontSize="lg" mt={4}>
            Sign up today and take your e-commerce business to the next level.
          </Text>
          <Button
            mt={5}
            size="lg"
            colorScheme="whiteAlpha"
            onClick={() => alert("Sign Up Now!")}
          >
            Sign Up Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
