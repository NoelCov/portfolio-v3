import React from "react";

import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Header from "../components/header/header.component";
import { WorkExp } from "../components/work-exp/work-exp.component";
import Projects from "../components/projects/projects.component";

import LandingImage from "../public/images/linkedin.jpg";

const Home: NextPage = () => {
    return (
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
                <WorkExp />
                <Projects />
            </Layout>
        </>
    );
};

export default Home;
