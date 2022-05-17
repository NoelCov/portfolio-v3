import styled from "styled-components";

import { breakpoints } from "../media";

export const LayoutContainer = styled.div`
    padding: 5vh 0;
    width: 100vw;
    background-color: #161923;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: ${breakpoints.md}) {
        padding: 5vh 8vw;
    }

    @media (min-width: ${breakpoints.lg}) {
        padding: 5vh 10vw;
        min-height: 90vh;
    }

    @media (min-width: ${breakpoints.xl}) {
        padding: 0vh 15vw;
    }
`;
