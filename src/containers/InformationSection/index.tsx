import { PlusSquareIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const InformationSection = () => {
  return (
    <Stack>
      <Box>
        <Heading>¿DE QUÉ SE TRATA?</Heading>
        <Text>El proyecto consta de dos procesos que trabajan articulada y simultáneamente:</Text>
        <OrderedList>
          <ListItem>el Mapa humanista</ListItem>
          <ListItem>las Escuelas de formación humanista</ListItem>
        </OrderedList>
      </Box>
      <Box>
        <Heading>¿QUÉ ES EL MAPA HUMANISTA?</Heading>
        <Text>Es una plataforma digital de lectura interactiva en la que la ciudadanía puede encontrar textos digitalizados (e-books, PDF y audio-libros: YouTube, Spotify, ITunes) de intelectuales peruanos. La plataforma busca promover la lectura entre las y los jóvenes a partir de medios más afines a sus prácticas tecnológicas e intereses cotidianos.</Text>
      </Box>
      <Box>
        <Heading>¿Y LAS ESCUELAS DE FORMACIÓN?</Heading>
        <Text>Son espacios para la formación de ciudadanas y ciudadanos humanistas y de líderes con interés en la labor educativa (reflexión e innovación pedagógicas, diseño e implementación de proyectos culturales) y la participación social, económica y política (voluntariados, emprendimientos, elecciones).</Text>
      </Box>
      <Box>
        <Button rightIcon={<PlusSquareIcon/>}>Mas información</Button>
      </Box>
    </Stack>
  )
}

export default InformationSection