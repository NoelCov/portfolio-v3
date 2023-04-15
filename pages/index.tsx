import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Header from "../components/header/header.component";

import LandingImage from "../public/images/linkedin.jpg";

const Home: NextPage = () => (
    <>
        <Head>
            <title>Noel Codes | Home Page</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="author" content="Noel Codes" />
            <meta
                name="description"
                content="Noel Codes, Software Engineer. I like to build things and learn new things. Constantly improving"
            />
            <meta
                name="og:description"
                content="Noel Codes, Software Engineer. I like to build things and learn new things. Constantly improving"
            />
            <meta name="og:image" content={LandingImage.src} />
            <meta name="twitter:url" content="https://noelcodes.dev/" />
            <meta name="twitter:title" content="Noel Codes | Home Page" />
            <meta
                name="twitter:description"
                content="Noel Codes, Software Engineer. I like to build things and learn new things. Constantly improving"
            />
            <meta name="twitter:image" content={LandingImage.src} />
            <html lang="en-us" />
        </Head>
        <Layout>
            <Header />
            {/* Work experience section start */}
            {/* <div className="flex flex-col items-start">
                <h2>Work Experience</h2>
                <p>Hello</p>
            </div> */}
        </Layout>
    </>
);

export default Home;
