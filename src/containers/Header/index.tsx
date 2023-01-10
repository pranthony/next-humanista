import { Box, Divider, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import Navbar from "../Navbar"

const Header = () => {
  return (
    <Stack>
      <VStack 
        bgPos='center'
        bgSize='cover'
        bgImage='https://res.cloudinary.com/dkavsgnad/image/upload/v1673023015/general/banner_lava_peru.jpg'
        >
        <Stack
          alignItems='flex-start'
          w={{base: '100%', md: '90%'}}
          maxW='1200px'
          p={8}
          gap={12}
          fontWeight='bold'
        >
          <Box h={55} display='-webkit-box' gap={4}>
            <Link href='https://lavaperu.com/'>
              <Image height='100%' src='https://res.cloudinary.com/dkavsgnad/image/upload/v1673023052/general/logo_lavaperu.png'/>
            </Link>
            <Box 
              color='black' 
              borderLeft='2px solid' 
              px={4} 
              fontSize={15}
              lineHeight={5}
            >
              <Text>LABORATORIO DE</Text>
              <Text>VANGUARDIA</Text>
              <Text>PEDAGÓGICA</Text>
            </Box>
          </Box>
          <Heading as='h1'>MAPA HUMANISTA</Heading>
        </Stack>    
      </VStack>
      <Navbar/>
    </Stack>
  )
}

export default Header