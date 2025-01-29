'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BsGithub, BsLinkedin  } from 'react-icons/bs'
import { MdEmail, MdOutlineEmail } from 'react-icons/md'
import { ReactNode } from 'react'
import Logo from "../assets/Logo.png";


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.900', 'gray.900')}
      color={useColorModeValue('gray.100', 'gray.200')}
      mb={0}
      mt={"auto"}
    >
      <Container
        as={Stack}
        maxW={'7xl'}
        py={4}
        direction={{ base: 'row', md: 'row' }}
        spacing={{ base: 4, md: 6 }}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>

        <Image src={Logo} alt="" w={{ base: '150px', sm: '180px', md: '200px' }} h={50} />
        <Text textAlign="center" fontSize={{ base: 'sm', sm: 'md', md: 'lg' }} display={{base:"none"}} mt={{ base: 2, md: 0 }}>
          © 2025 NextCart.com. All rights reserved
        </Text>
        <Stack direction="row" spacing={6} justify={{ base: 'center', md: 'flex-start' }} mt={{ base: 4, sm: 4, md: 0 }}>
          <SocialButton label={'GitHub'} href={'https://github.com/Akshatverma01'}>
            <BsGithub />
          </SocialButton>
          <SocialButton label={'linkedin'} href={'https://www.linkedin.com/in/akshat-verma-2b6106228/'}>
            <BsLinkedin />
          </SocialButton>
          <SocialButton label={'Email'} href={'akshat0104verma@gmail.com'}>
            <MdEmail />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}