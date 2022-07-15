import React from "react";

import styled from "styled-components";

import Image from "next/image";
import { breakpoints } from "../../utils/breakpoints";

const ImageContainer = styled.div`
    display: block;
    width: 65%;

    @media (min-width: ${breakpoints.md}) {
        width: 50%;
    }
`;

interface imageContainerProps {
    src: string;
    quality: string;
    height: number;
    alt: string;
    width: number;
    loading: string;
    priority: boolean;
}

const ImageContainerComponent = ({
    src,
    height,
    width,
    alt,
    priority = true,
}: imageContainerProps) => (
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
