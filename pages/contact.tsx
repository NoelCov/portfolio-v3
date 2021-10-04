import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Contact from "../components/contact/contact.component";

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>Noel Codes | Contact</title>
    </Head>
    <Layout>
      <Contact />
    </Layout>
  </>
);

export default ContactPage;
