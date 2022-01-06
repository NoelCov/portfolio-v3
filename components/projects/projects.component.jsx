import React from "react";

import styled from "styled-components";

import { projectsArray } from "./projects.js";

import ProjectContainerComponent from "../project-container/project-container.component";
import SectionTitle from "../utils/section-title.component";

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 150px;
  padding: 8vh 0;

  @media screen and (max-width: 900px) {
    padding: 8vh 0 10vh;
  }
`;

const Projects = () => (
  <ProjectsContainer>
    <SectionTitle>PROJECTS</SectionTitle>
    {projectsArray.map((project, key) => {
      return (
        <ProjectContainerComponent
          key={key}
          imageSrc={project.imageSrc}
          imageWidth={project.imageWidth}
          imageHeight={project.imageHeight}
          projectContent={project.projectContent}
          projectTitle={project.projectTitle}
          websiteURL={project.websiteURL}
          toolsUsed={project.toolsUsed}
        />
      );
    })}
  </ProjectsContainer>
);

export default Projects;
