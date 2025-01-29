import React, { useState } from "react";
import { Box, Image, IconButton, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      position="relative"
      overflow="hidden"
      h={{ base: "500px",sm:"400px", md: "750px","lg":"800px" }}
      w={{ base: "cover",sm:"85vw", md: "100%","lg":"100%" }}
      pt={20}
    >
      <Flex
        as={MotionBox}
        animate={{ x: `-${currentIndex * 100}%` }}
        transition="ease 0.15s"
        // width={`${images.length * 100}%`}
        height="100%"
      >
        {images.map((src, index) => (
          <Box key={index} flex="0 0 100%" height="100%">
            <Image
              src={src}
              alt={`Slide ${index}`}
              // objectFit="cover"
              width="100%"
              height="100%"
            />
          </Box>
        ))}
      </Flex>

      {/* Navigation Buttons */}
      <IconButton
        aria-label="Previous Slide"
        icon={<ChevronLeftIcon
        color={useColorModeValue("gray.800","gray.500")}
          height={{ base: 10, sm: 30, md: 50 }}
          width={{ base: 10, sm:30, md: 50 }}
          />}
        position="absolute"
        top="50%"
        left={{ base: 0, sm: 10, md: 30 }}
        transform="translateY(-50%)"
        zIndex="10"
        onClick={handlePrev}
        bg={useColorModeValue("whiteAlpha.700","whiteAlpha.400")}
        _hover={{  bg:useColorModeValue("whiteAlpha.200","whiteAlpha.800") }}
        height={{ base: 10, sm: 30, md: 70 }}
      />
      <IconButton
        aria-label="Next Slide"
        icon={<ChevronRightIcon
          color={useColorModeValue("gray.800","gray.500")}
          height={{ base: 10, sm: 30, md: 50 }}
          width={{ base: 10, sm:30, md: 50 }}
           />}
        position="absolute"
        top="50%"
        right={{ base: 0, sm: 10, md: 30 }}
        transform="translateY(-50%)"
        zIndex="10"
        onClick={handleNext}
        bg={useColorModeValue("whiteAlpha.700","whiteAlpha.400")}
        _hover={{  bg:useColorModeValue("whiteAlpha.200","whiteAlpha.800") }}
        height={{ base: 10, sm: 30, md: 70 }}
      />
    </Box>
  );
};

export default Carousel;
