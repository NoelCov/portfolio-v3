import type { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

const GlobalStyle = createGlobalStyle`
html,
body {
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Nunito Sans', sans-serif;
  color: white;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <GlobalStyle />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
