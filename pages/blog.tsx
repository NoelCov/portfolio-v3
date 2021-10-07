import React from "react";

import Head from "next/head";

import LayoutComponent from "../components/layout/layout.component";
import SectionTitle from "../components/utils/section-title.component";

import LandingImage from "../public/images/noelcodeshero.jpg";

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Noel Codes | Blog</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="I've been around computers my whole life but never did any programming with them. Once I did, everything changed for me. I want to solve problems using my skills as a programmer."
        />
        <meta
          name="og:description"
          content="Since I discovered programming all I want to do is solve problems using my skills."
        />
        <meta name="og:image" content={LandingImage.src} />
        <meta name="twitter:url" content="https://noelcodes.dev/blog" />
        <meta name="twitter:title" content="Noel Codes | Blog" />
        <meta
          name="twitter:description"
          content="Since I discovered programming all I want to do is solve problems using my skills."
        />
        <meta name="twitter:image" content={LandingImage.src} />
        <html lang="en-us" />
      </Head>
      <LayoutComponent>
        <SectionTitle>COMING SOON...</SectionTitle>
      </LayoutComponent>
    </>
  );
};

export default BlogPage;
