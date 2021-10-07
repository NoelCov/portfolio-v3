import React from "react";

import Head from "next/head";

import LayoutComponent from "../components/layout/layout.component";
import ProjectsComponent from "../components/projects/projects.component";

import LandingImage from "../public/images/noelcodeshero.jpg";

const Projects = () => (
  <>
    <Head>
      <title>Noel Codes | Projects</title>
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
      <meta name="twitter:url" content="https://noelcodes.dev/projects" />
      <meta name="twitter:title" content="Noel Codes | Projects" />
      <meta
        name="twitter:description"
        content="Since I discovered programming all I want to do is solve problems using my skills."
      />
      <meta name="twitter:image" content={LandingImage.src} />
      <html lang="en-us" />
    </Head>
    <LayoutComponent>
      <ProjectsComponent />
    </LayoutComponent>
  </>
);

export default Projects;
