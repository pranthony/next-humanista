import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
  
}

const theme = extendTheme({ 
  ...config,
  fonts:{
    heading: `'Roboto Condensed', sans-serif`,
  },
  colors: {
    brand: {
      900: '#321216',
      800: '#321216',
      700: '#321216'
    }
  }
})

export default theme