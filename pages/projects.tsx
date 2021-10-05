import React from 'react'

import Head from "next/head";

import LayoutComponent from '../components/layout/layout.component';
import ProjectsComponent from "../components/projects/projects.component";

const Projects = () => (
  <>
  <Head>
    <title>Noel Codes | Projects</title>
  </Head>
    <LayoutComponent>
      <ProjectsComponent />
    </LayoutComponent>
    </>
  );

export default Projects;