import "../styles/globals.css";
import HeaderComponent from "../components/header";
import Categories from "../components/categories";
import FooterComponent from "../components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderComponent />
      <hr className="hidden sm:block"/>
      <Categories />
      <Component {...pageProps} />
      <FooterComponent />
    </>
  );
}

export default MyApp;
