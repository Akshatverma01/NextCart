import { Container, Flex, HStack, Text, Heading, Button, useColorMode, useColorModeValue, VStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import roundLogo from "../assets/roundLogo.png"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <Container maxW="100%" px={4} py={2} bg="#011323" position="fixed" zIndex={100} top={0}>
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="90%" mx="auto">
        {/* Logo and Brand Name */}
        <Link to="/">
          <Flex align="center">
            <img
              src={roundLogo} 
              alt="Logo"
              width="50px" 
            />
            <Heading as="h1" fontSize={{ base: "18px", sm: "24px", md: "32px" }} fontWeight="bold" color="white" ml={2}>
              NextCart.com
            </Heading>
          </Flex>
        </Link>

        {/* Mobile Menu Button */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="outline"
          color="white"
          _hover={{ bg: "gray.700" }}
          onClick={toggleMenu}
        />

        {/* Navigation Links */}
        <HStack
          spacing={10}
          fontSize={{ base: "16px", sm: "18px", md: "20px" }}
          color="white"
          display={{ base: "none", md: "flex" }} // Hide on mobile
        >
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/create">
            <Button p={0}>
              <PlusSquareIcon fontSize={{ base: "20px", sm: "22px" }} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>

      {/* Mobile Menu (Shown when isOpen) */}
      {isOpen && (
        <VStack
          spacing={4}
          align="center"
          py={4}
          bg="gray.800"
          w="full"
          display={{ base: "flex", md: "none" }}
		  color={"white"}
        >
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/create" onClick={toggleMenu}>
            <Button p={0}>
              <PlusSquareIcon fontSize="22px" />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </VStack>
      )}
    </Container>
  );
};

export default Navbar;
