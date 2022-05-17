import React from "react";

import styled from "styled-components";

import Image from "next/image";

const ImageContainer = styled.div`
    max-width: 40%;

    @media screen and (max-width: 1200px) {
        max-width: 50%;
    }

    @media screen and (max-width: 550px) {
        max-width: 65%;
    }
`;

const ImageContainerComponent = ({ src, height, width, alt, priority }) => (
    <ImageContainer>
        <Image
            src={src}
            quality="80"
            height={height}
            alt={alt}
            width={width}
            loading="eager"
            priority={priority}
        />
    </ImageContainer>
);

export default ImageContainerComponent;
