import styled from "styled-components";

import { breakpoints } from "../breakpoints";

export const ButtonContainer = styled.div`
    font-size: 0.9rem;
    background-color: #B18C19;
    color: #161823;
    padding: 15px 60px;
    text-align: center;
    border-radius: 4px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);


    :hover {
        background-color: #DEF2F0;
    }

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1rem;
    }
`;
