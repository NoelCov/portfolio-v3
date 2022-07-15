import React from "react";

import Head from "next/head";

import LayoutComponent from "../components/layout/layout.component";
import ProjectsComponent from "../components/projects/projects.component";

import LandingImage from "../public/images/linkedin.jpg";

const Projects = () => (
    <>
        <Head>
            <title>Noel Codes | Projects</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="author" content="Noel Codes" />
            <meta
                name="description"
                content="Noel Codes projects section. This section showcases some of the projects he's worked on."
            />
            <meta
                name="og:description"
                content="Noel Codes projects section. This section showcases some of the projects he's worked on."
            />
            <meta name="og:image" content={LandingImage.src} />
            <meta name="twitter:url" content="https://noelcodes.dev/projects" />
            <meta name="twitter:title" content="Noel Codes | Projects" />
            <meta
                name="twitter:description"
                content="Noel Codes projects section. This section showcases some of the projects he's worked on."
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
