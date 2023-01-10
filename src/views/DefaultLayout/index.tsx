import { Stack } from "@chakra-ui/react"
import Head from "next/head"
import { JsxElement } from "typescript"
import Footer from "../../containers/Footer"
import Header from "../../containers/Header"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}

const DefaultLayout = ({children}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>LAVA | Mapa humanista</title>
      </Head>
      <Header/>
        {children}
      <Footer/>
    </>
  )
}

export default DefaultLayout