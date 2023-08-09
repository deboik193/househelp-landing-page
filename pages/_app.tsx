import "../styles/globals.css";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
