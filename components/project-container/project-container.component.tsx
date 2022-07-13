import React from "react";

import Image from "next/image";

import ButtonComponent from "../button/button.component";

import {
    ProjectContainer,
    ProjectImageContainer,
    ProjectContentContainer,
    ProjectTitle,
    ProjectText,
    ProjectToolsContainer,
    ProjectTool,
    Separator,
} from "./project-container.styles";

interface projectContainerProps {
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    projectContent: string;
    projectTitle: string;
    websiteURL: string;
    toolsUsed: string[];
}

const ProjectContainerComponent = ({
    imageSrc,
    imageWidth,
    imageHeight,
    projectContent,
    projectTitle,
    websiteURL,
    toolsUsed,
}: projectContainerProps): JSX.Element => (
    <ProjectContainer>
        <ProjectImageContainer>
            <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                <Image
                    layout="responsive"
                    alt="Project"
                    src={imageSrc}
                    height={imageHeight}
                    width={imageWidth}
                />
            </a>
        </ProjectImageContainer>
        <ProjectContentContainer>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            <ProjectText>{projectContent}</ProjectText>
            <ProjectToolsContainer>
                {toolsUsed.map((tool, key) => (
                    <ProjectTool key={key}>{tool}</ProjectTool>
                ))}
            </ProjectToolsContainer>
            <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                <ButtonComponent text={"VIEW PROJECT"} />
            </a>
        </ProjectContentContainer>
        <Separator />
    </ProjectContainer>
);

export default ProjectContainerComponent;
