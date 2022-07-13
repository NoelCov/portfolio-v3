import styled from "styled-components";

import { breakpoints } from "../breakpoints";

export const ButtonContainer = styled.div`
    font-size: 0.9rem;
    border: 1px solid #2b79a2;
    color: #bcbdd0;
    padding: 15px 60px;
    text-align: center;
    border-radius: 4px;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        border-color: #bcbdd0;
    }

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1rem;
    }
`;
