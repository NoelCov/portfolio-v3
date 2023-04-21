import React from "react";

import { projectsArray } from "./projects";

import ProjectContainer from "../project/project.component";

const Projects = (): JSX.Element => (
    <div id="projects" className="mt-20 lg:mt-40">
        <h2 className="text-2xl lg:text-4xl mb-8 lg:mb-10 text-primaryColor font-bold">
            Projects
        </h2>
        <div className="flex flex-col gap-10 md:gap-16 text-lighterBlack lg:grid lg:grid-cols-2 xl:w-5/6 mx-auto 2xl:max-w-screen-2xl">
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
