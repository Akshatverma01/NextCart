import React, { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Box,
  Input,
  Button,
  useToast,
  FormControl,
  FormLabel,
  Textarea,
  useColorModeValue,
  Card,
  CardBody,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product.js";
import { useNavigate } from "react-router-dom";
import productBg from "../assets/productBg.jpg";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });

  const toast = useToast();
  const { createProduct } = useProductStore();
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
        duration: 3000,
      });
    } else {
      toast({
        title: "Success",
        description: "Product created successfully!",
        status: "success",
        isClosable: true,
        duration: 3000,
      });
      navigate("/");
    }
    setNewProduct({ name: "", price: "", image: "", description: "" });
  };

  return (
<Container maxW="100%" p={0}>
  <Box
    bgImage={productBg}
    bgSize="cover"
    bgPosition="center"
    position="relative"
    py={20}
    px={10}
    color="white"
    textAlign="center"
    display="flex"
    alignItems="center"
    justifyContent="center"
    minH="100vh"
    _before={{
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      bg: "blackAlpha.700", // Adjusted opacity of overlay (lower value = more transparent)
      zIndex: 1,
	  opacity: 0.8,
    }}
  >
<VStack
  spacing={8}
  minW={{ base: "90%", sm: "400px", md: "650px" }}
  position="relative"
  zIndex={2}
>
      {/* Page Heading */}
      <Heading as="h1" size="2xl" textAlign="center">
        Add New Product
      </Heading>

      {/* Card for Form */}
      <Card
        w="full"
        bg={useColorModeValue("whiteAlpha.900", "gray.800")}
        boxShadow="lg"
        borderRadius="xl"
        overflow="hidden"
      >
        <CardBody p={8}>
          <VStack spacing={6} align="stretch">
            {/* Product Name */}
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter product name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                focusBorderColor="teal.500"
                size="lg"
              />
            </FormControl>

            {/* Product Price */}
            <FormControl>
              <FormLabel>Product Price</FormLabel>
              <Input
                type="number"
                placeholder="Enter product price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
                focusBorderColor="teal.500"
                size="lg"
              />
            </FormControl>

            {/* Product Image */}
            <FormControl>
              <FormLabel>Product Image URL</FormLabel>
              <Input
                type="url"
                placeholder="Enter image URL"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
                focusBorderColor="teal.500"
                size="lg"
              />
            </FormControl>

            {/* Product Description */}
            <FormControl>
              <FormLabel>Product Description</FormLabel>
              <Textarea
                placeholder="Enter a brief description of the product"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    description: e.target.value,
                  })
                }
                focusBorderColor="teal.500"
                size="lg"
                resize="vertical"
				maxLength={70}
              />
            </FormControl>

            {/* Submit Button */}
            <Button
              colorScheme="teal"
              size="lg"
              w="full"
              onClick={handleAddProduct}
              _hover={{ bg: "teal.600" }}
            >
              Add Product
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  </Box>
</Container>

  );
};

export default CreatePage;
