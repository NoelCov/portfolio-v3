import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Contact from "../components/contact/contact.component";

import LandingImage from "../public/images/linkedin.jpg";

const ContactPage: NextPage = () => (
    <>
        <Head>
            <title>Noel Codes | Contact</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="author" content="Noel Codes" />
            <meta
                name="description"
                content="Noel Codes contact form to get in touch with him"
            />
            <meta
                name="og:description"
                content="Noel Codes contact form to get in touch with him"
            />
            <meta name="og:image" content={LandingImage.src} />
            <meta name="twitter:url" content="https://noelcodes.dev/contact" />
            <meta name="twitter:title" content="Noel Codes | Contact" />
            <meta
                name="twitter:description"
                content="Noel Codes contact form to get in touch with him"
            />
            <meta name="twitter:image" content={LandingImage.src} />
            <html lang="en-us" />
        </Head>
        <Layout>
            <Contact />
        </Layout>
    </>
);

export default ContactPage;
