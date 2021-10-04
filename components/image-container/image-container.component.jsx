import React from "react";

import styled from "styled-components";

import Image from "next/image";

const ImageContainer = styled.div`
  max-width: 50%;

  @media screen and (max-width: 900px) {
    max-width: 80%;
  }

  @media screen and (max-width: 550px) {
    max-width: 95%;
  }
`;

const ImageContainerComponent = ({ src, height, width, alt }) => (
  <ImageContainer>
    <Image src={src} height={height} alt={alt} width={width} loading="eager" />
  </ImageContainer>
);

export default ImageContainerComponent;