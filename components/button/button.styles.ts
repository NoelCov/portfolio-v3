import styled from "styled-components";

import { breakpoints } from "../../utils/breakpoints";
import { colors } from "../../utils/colorOptions";

import {ButtonProps} from "./button.component"

export const ButtonContainer = styled.div<ButtonProps>`
    font-size: 0.9rem;
    color: #161823;
    padding: 15px 60px;
    text-align: center;
    border-radius: 4px;
    transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: ${(p) => p.bgColor};
    color: ${(p) => p.bgColor !== colors.yellow ? "#BCBECD" : "#161823"};

    :hover {
        color: #161823;
        background-color: #def2f0;
    }

    @media (min-width: ${breakpoints.lg}) {
        font-size: 1rem;
    }
`;