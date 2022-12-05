import "../styles/globals.css";
import "../styles/index.css";
import "../styles/header.css";
import "../styles/browse.css";
import "../styles/filter.css";
import "../styles/about.css";
import "../styles/loading.css";
import "../styles/404.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
