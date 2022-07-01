import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
