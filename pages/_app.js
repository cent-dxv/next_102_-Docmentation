import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";
// for seo

import "../styles/globals.css";
// import 'bootstrap/dist/css/bootstrap.min.css'
import "../styles/layout.css";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title> 🎉👍meta </title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
