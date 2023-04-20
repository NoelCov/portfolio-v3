import type { AppProps } from "next/app";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

import { theme } from "../utils/mui-theme";

import "../styles/global.css";
import { ThemeProvider } from "@mui/material";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
    </ThemeProvider>
);

export default MyApp;
