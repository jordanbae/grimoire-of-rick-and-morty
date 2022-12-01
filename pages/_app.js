import '../styles/globals.css'
import '../styles/index.css'
import '../styles/header.css'

import Header from './header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>

  )
}

export default MyApp
