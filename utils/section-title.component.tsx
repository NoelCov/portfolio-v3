import React, { FC } from "react";

import styled from "styled-components";

import { breakpoints } from "./breakpoints";

const SectionTitleContainer = styled.h1`
    font-size: 1.5rem;
    font-family: Manrope;
    text-align: center;
    margin-bottom: 2rem;

    @media (min-width: ${breakpoints.md}) {
        font-size: 2.5rem;
    }

    @media (min-width: ${breakpoints.lg}) {
        font-size: 3.5rem;
    }

    @media (min-width: ${breakpoints.xl}) {
        margin-bottom: 5rem;
    }
`;

const SectionTitle: FC = ({ children }) => (
    <SectionTitleContainer>{children}</SectionTitleContainer>
);

export default SectionTitle;
