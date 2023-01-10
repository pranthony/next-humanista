import { Box, Divider, Grid, GridItem, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"

const Footer = () => {
  return (
    <VStack
      bgImage='https://res.cloudinary.com/dkavsgnad/image/upload/v1673023034/general/footer.jpg'
      bgPos='center'
      bgSize='cover'
      p={8}
      gap={4}
    >
      <Grid 
        templateColumns={{base: '1fr', md: '1fr 1fr'}}
        justifyContent=''
        w={{base: '100%', md: '90%'}}
        maxW='1200px'
        gap={4}
      >
        <GridItem>
          <Heading as='h4' size='md'>Enlaces Relacionados</Heading>
          <Box display='grid' gap={2} py={4}>
            <Link href='https://lavaperu.com/'>¿Qué es LAVAPERÚ?</Link>
            <Divider />
            <Link href='https://fehlima.com/'>Festival de las Humanidades</Link>
            <Divider />
            <Link href='https://lavaperu.com/revistatxt'>TXT Revista de Humanidades y Ciencias Sociales</Link>
            <Divider />
          </Box>
        </GridItem>
        <GridItem>
          <Heading as='h4' size='md'>Contacto</Heading>
          <Box display='grid' gap={2} py={4}>
            <Text>prensalavaperu@gmail.com</Text>
            <Text>+51 951 819 737</Text>
          </Box>
        </GridItem>
      </Grid>
      <Text as='span'>2016-2022 Laboratorio de Vanguardia Pedagógica Peruana - Lima, Perú</Text>
    </VStack>
  )
}

export default Footer