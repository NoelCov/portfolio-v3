import React from "react";

import { projectsArray } from "./projects";

import ProjectContainer from "../project/project.component";

const Projects = (): JSX.Element => (
    <section id="projects" className="mt-10 pt-20 lg:pt-40 lg:scroll-mt-20">
        <h2 className="text-2xl lg:text-4xl mb-4 lg:mb-10 text-primaryColor font-bold">
            Projects
        </h2>
        <div className="flex flex-col gap-10 md:gap-16 text-lighterBlack lg:grid lg:grid-cols-2 mx-auto">
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
    </section>
);

export default Projects;
