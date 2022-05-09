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
  ViewProjectLink
} from "./project-container.styles";

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
      <a href={websiteURL} target="_blank" rel="noopener noreferrer">
      <ButtonComponent>
      VIEW PROJECT
      </ButtonComponent>
      </a>
    </ProjectContentContainer>
  </ProjectContainer>
);

export default ProjectContainerComponent;
