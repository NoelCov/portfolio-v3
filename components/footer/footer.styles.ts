import styled from "styled-components";

import { breakpoints } from "../breakpoints";

export const FooterContainer = styled.div`
    width: 100vw;
    background-color: #161923;
    display: flex;
    color: #B18C19;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    min-height: 5vh;
    padding: 25px 0;
    gap: 25px;

    @media (min-width: ${breakpoints.md}) {
        gap: 30px;
    }

    @media (min-width: ${breakpoints.lg}) {
        flex-direction: row;
        padding: 30px 50px;
    }
`;

export const FooterSocialsContainer = styled.div`
    display: flex;
    gap: 25px;

    @media (min-width: ${breakpoints.md}) {
        gap: 50px;
    }
`;

export const FooterSocialContainer = styled.a`
    display: flex;
    font-size: 1.2rem;

    @media (min-width: ${breakpoints.md}) {
        font-size: 1.4rem;
    }
`;
