import React from "react";

import styled from "styled-components";

import { projectsArray } from "./projects";

import ProjectContainer from "../project/project.component";
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
    <div>
        <h2 className="text-2xl lg:text-4xl mb-8 lg:mb-10 text-primaryColor font-bold">
            Projects
        </h2>
        <div className="flex flex-col gap-10 md:gap-16 text-lighterBlack xl:grid xl:grid-cols-2 xl:w-5/6 mx-auto 2xl:max-w-screen-2xl">
            {projectsArray.map((project, key) => {
                return (
                    <ProjectContainer
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
        </div>
    </div>
);

export default Projects;
