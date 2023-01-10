import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Divider, HStack, IconButton, Input, Stack, useColorMode, useColorModeValue, VStack } from "@chakra-ui/react"
import Link from "next/link"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const Icon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <Stack
      flexDirection={{ base: 'column', md: 'row' }}
      justifyContent='space-around' 
      alignItems='center'
      pb={4}
      borderBottom='2px solid #d35d19'
    >
      <Box 
        flexDirection={{ base: 'column', md: 'row' }}
        as='nav' 
        display='flex'
        alignItems='center'
        gap={4}
      >
        <Link href='/'> Inicio</Link>
        <Link href='/request'>Postula a tu humanista</Link>
      </Box>
      <HStack>
        <HStack>
          <IconButton aria-label='search-btn' icon={<SearchIcon/>} />
          <Input type='text' required/>
        </HStack>
        <IconButton 
          aria-label='search-btn' 
          icon={<MoonIcon/>}
          onClick={toggleColorMode}
        />
      </HStack>
    </Stack>
  )
}

export default Navbar