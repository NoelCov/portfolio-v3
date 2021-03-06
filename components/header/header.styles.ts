import styled from "styled-components";

import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colorOptions";

export const HeaderContainer = styled.div`
    display: flex;
    gap: 50px;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (min-width: ${breakpoints.xs}) {
    }

    @media (min-width: ${breakpoints.lg}) {
        width: 100%;
        gap: 20px;
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-template-areas:
            "title image"
            "text image"
            "button image";
    }

    @media (min-width: ${breakpoints.xl}) {
        grid-template-columns: 2.2fr 1fr;
    }
`;

export const HeaderTitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-family: "Josefin Sans", sans-serif;
    gap: 5px;

    @media (min-width: ${breakpoints.lg}) {
        gap: 0;
    }
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    font-size: 3.5rem;

    @media (min-width: ${breakpoints.md}) {
        font-size: 5rem;
    }

    @media (min-width: ${breakpoints.lg}) {
        text-align: start;
    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 6.5rem;
    }
`;

export const HeaderTitleP = styled.span`
    font-size: 1.8rem;

    .coloredText {
        color: #b18c19;
    }

    @media (min-width: ${breakpoints.md}) {
        font-size: 2.5rem;
    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 3rem;
    }
`;

export const HeaderTextContainer = styled.div`
    font-size: 1.1rem;
    text-align: center;
    width: 80%;

    @media (min-width: ${breakpoints.sm}) {
        font-size: 1.2rem;
    }

    @media (min-width: ${breakpoints.md}) {
        font-size: 1.3rem;
    }

    @media (min-width: ${breakpoints.lg}) {
        width: 80%;
        text-align: start;
    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 1.5rem;
    }
`;

export const ImageContainer = styled.div`
    display: block;
    width: 80%;
    box-shadow: 0 0 20px 2px black;

    @media (min-width: ${breakpoints.lg}) {
        grid-area: image;
        width: 100%;
        box-shadow: 0 0 50px 10px black;
        margin-right: auto;
    }
`;

export const ButtonContainer = styled.div`
    @media (min-width: ${breakpoints.lg}) {
        max-width: 50%;
    }

    @media (min-width: ${breakpoints.xl}) {
        max-width: 40%;
    }
`;
