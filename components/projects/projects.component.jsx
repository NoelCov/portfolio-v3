import React from "react";

import styled from "styled-components";

import { projectsArray } from "./projects.js";

import ProjectContainerComponent from "../project-container/project-container.component";
import SectionTitle from "../utils/section-title.component";
import { breakpoints } from "../media.js";

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    padding: 0;

    @media (min-width: ${breakpoints.md}) {
        padding: 8vh 0 10vh;
    }

    @media (min-width: ${breakpoints.lg}) {
        padding: 8vh 0;
        gap: 150px;
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
