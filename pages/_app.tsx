import '../styles/globals.css';
import '@fontsource/roboto-condensed'
import type { AppProps } from 'next/app';
import { ColorModeScript, ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import theme from '../src/utils/theme';

export function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;