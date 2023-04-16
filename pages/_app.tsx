import type { AppProps } from "next/app";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <>
        <Navbar />
        <Component {...pageProps} />
    </>
);

export default MyApp;
