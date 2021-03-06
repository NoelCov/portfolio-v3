import type { AppProps } from "next/app";

import { createGlobalStyle } from "styled-components";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

import { breakpoints } from "../utils/breakpoints";

const GlobalStyle = createGlobalStyle`
html,
body {
  width: 100vw;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Nunito Sans', sans-serif;
  color: #BCBECD;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

p {
  margin: 0;
  font-size: 1.1rem;

  @media (min-width: ${breakpoints.sm}) {
        font-size: 1.2rem;
    }

    @media (min-width: ${breakpoints.md}) {
        font-size: 1.3rem;
    }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.4rem;
  }
}

li {
  @media (min-width: ${breakpoints.lg}) {
    font-size: 1.3rem;
  }
}

a {
    color: inherit;
    color: #B18C19;
    text-decoration: none;
    font-size: 1rem;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        color: #BCBECD;
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

input:-webkit-autofill {
  -webkit-text-fill-color: #161923 !important;
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
