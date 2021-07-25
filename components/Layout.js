import Head from "next/head"
import Header from "./Header"

const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="main">{ children }</main>
    </>
  )
}

export default Layout;