import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "../components/navbar/navbar.component";
import Footer from "../components/footer/footer.component";

import { theme } from "../utils/mui-theme";
import { ThemeProvider } from "@mui/material";

import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <Analytics />
    </ThemeProvider>
);

export default MyApp;
