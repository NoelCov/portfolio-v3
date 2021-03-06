import styled from "styled-components";

import { breakpoints } from "../../utils/breakpoints";

export const ProjectContainer = styled.div`
    width: 90vw;
    margin: 0 auto;
    display: block;
    margin-bottom: 4rem;

    @media (min-width: ${breakpoints.md}){
        width: 80vw;
    }

    @media (min-width: ${breakpoints.lg}){
        width: 70vw;
    }

    @media (min-width: ${breakpoints.xl}){
        width: 50vw;
        margin-bottom: 10rem;
    }
`;

export const ProjectImageContainer = styled.div`
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.9;
    margin: 0 auto;

    :hover {
        transform: scale(1.03);
    }
`;

export const ProjectContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    border-top: none;
    gap: 30px;
    margin: 0 auto;
    padding: 25px;

    @media (min-width: ${breakpoints.md}) {
        gap: 50px;
        padding: 20px 25px;
        min-height: 280px;
        width: 90%;
    }

    @media (min-width: ${breakpoints.lg}) {
        padding: 40px 25px;
    }

    @media (min-width: ${breakpoints.xl}) {
        margin: 30px auto;
        width: 80%;
        padding: 80px 25px;
    }
`;

export const Separator = styled.hr`
    width: 50%;
    height: 3px;
    border: none;
    margin: 0 auto;
    background-color: #252C46;
`;

export const ProjectTitle = styled.h3`
    margin: 0;
    color: #B18C19;
    font-size: 1.2rem;

    @media (min-width: ${breakpoints.md}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1.8rem;
    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 2rem;
    }
`;
export const ProjectText = styled.p`
    margin: 0;
`;

export const ProjectToolsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 5px;

    @media (min-width: ${breakpoints.md}) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    @media (min-width: ${breakpoints.lg}) {
        gap: 15px;
    }
`;

export const ProjectTool = styled.p`
    margin: 0;
    font-size: 1rem;

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1.1rem;
    }
`;
