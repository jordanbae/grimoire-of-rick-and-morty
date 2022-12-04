import '../styles/globals.css'
import '../styles/index.css'
import '../styles/header.css'
import '../styles/browse.css'
import '../styles/filter.css'
import 'bootstrap/dist/css/bootstrap.css'
import "bootstrap/dist/css/bootstrap.min.css";

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
