import { Grid, GridItem, Stack } from '@chakra-ui/react'
import InformationSection from '../src/containers/InformationSection'
import DefaultLayout from '../src/views/DefaultLayout'

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Stack 
          maxW={1200}
          margin='auto'
          w={{base: '100%', md: '90%'}}
        >
          <Grid templateColumns={{base: '1fr', md: '1fr 1fr'}} >
            <GridItem>
              <InformationSection/>
            </GridItem>
            <GridItem></GridItem>
          </Grid>
        </Stack>
      </DefaultLayout>
    </>
  )
}
