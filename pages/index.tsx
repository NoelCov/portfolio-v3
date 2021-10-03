import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../components/layout/layout.component";
import Header from "../components/header/header.component";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Noel Codes - Home Page</title>
    </Head>
    <Layout>
      <Header />
    </Layout>
  </>
);

export default Home;
