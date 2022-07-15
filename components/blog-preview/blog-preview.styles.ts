import styled from "styled-components";

import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colorOptions";

export const BlogPreviewContainer = styled.div`
    background-color: #1d1f2d;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 95%;
    margin: 0 auto;
    padding: 2rem 1rem;
    border-radius: 0.5rem;
    gap: 1.2rem;
    margin-bottom: 4rem;
    box-shadow: 0 0 20px 1px black;


    @media (min-width: ${breakpoints.md}){
        padding: 2rem 4rem;
        gap: 1.5rem;
        width: 90%;
    }

    @media (min-width: ${breakpoints.lg}) {
        gap: 2rem;
    }

    @media (min-width: ${breakpoints.xl}) {
        width: 100%;
        padding: 4rem 8rem;
    }
`;

export const PreviewTitle = styled.h3`
    margin: 0;
    color: ${colors.yellow};

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1.8rem;
    }

    @media (min-width: ${breakpoints.xl}){
        font-size: 2rem;
    }
`;

export const PreviewText = styled.p`
    margin: 0;

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1.2rem;
    }
`

export const PreviewDate = styled.p`
    margin: 0;
    font-size: 0.9rem;

    @media (min-width: ${breakpoints.xl}){
        font-size: 1.2rem;
    }
`

export const ButtonContainer = styled.div`
    cursor: pointer;

    @media (min-width: ${breakpoints.lg}) {
        width: 20rem;
    }
`;
