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
  color: #bcbdd0;
}

p {
  font-size: 1.4rem;
  text-align: center;

  @media screen and (max-width: 900px){
    font-size: 1.2rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
}

a {
  color: inherit;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #2b79a2;
  }

  @media screen and (max-width: 900px) {
    font-size: 1rem;
  }
}

* {
  box-sizing: border-box;
}

input {
  font-family: 'Nunito Sans', sans-serif;
  color: white;

  ::placeholder {
    color: white;
    opacity: 1;
  }
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
