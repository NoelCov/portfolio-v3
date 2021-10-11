import React from "react";

import Image from "next/image";

import {
  ProjectContainer,
  ProjectImageContainer,
  ProjectContentContainer,
  ProjectTitle,
  ProjectText,
  ProjectToolsContainer,
  ProjectTool,
  ViewProjectLink
} from "./project-container.styles";

import ButtonComponent from "../button/button.component";

const ProjectContainerComponent = ({
  imageSrc,
  imageWidth,
  imageHeight,
  projectContent,
  projectTitle,
  websiteURL,
  toolsUsed,
}) => (
  <ProjectContainer>
    <ProjectImageContainer>
      <a href={websiteURL} target="_blank" rel="noopener noreferrer">
        <Image
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
      <ViewProjectLink href={websiteURL} target="_blank" rel="noopener noreferrer">
        VIEW PROJECT
      </ViewProjectLink>
    </ProjectContentContainer>
  </ProjectContainer>
);

export default ProjectContainerComponent;
