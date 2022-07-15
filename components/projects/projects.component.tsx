import React from "react";

import styled from "styled-components";

import { projectsArray } from "./projects";

import ProjectContainerComponent from "../project-container/project-container.component";
import SectionTitle from "../../utils/section-title.component";
import { breakpoints } from "../../utils/breakpoints";

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;

    @media (min-width: ${breakpoints.md}) {
        padding: 8vh 0;
    }
`;

const Projects = (): JSX.Element => (
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
