import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Contact from "../components/contact/contact.component";

import LandingImage from "../public/images/noelcodeshero.jpg";

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Noel Codes | Contact</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="description"
        content="I've been around computers my whole life but never did any programming with them.
      Once I did, everything changed for me. I want to solve problems using my skills as a programmer."
      />
      <meta
        name="og:description"
        content="Since I discovered programming all I want to do is solve problems using my skills."
      />
      <meta name="og:image" content={LandingImage.src} />
      <meta name="twitter:url" content="https://noelcodes.dev/contact" />
      <meta name="twitter:title" content="Noel Codes | Contact" />
      <meta
        name="twitter:description"
        content="Since I discovered programming all I want to do is solve problems using my skills."
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
