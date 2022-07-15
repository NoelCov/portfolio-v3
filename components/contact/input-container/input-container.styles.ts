import styled, { css } from "styled-components";
import { breakpoints } from "../../../utils/breakpoints";

export const LabelInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    font-size: 1rem;
`;

const inputStyles = css`
    background-color: inherit;
    border: none;
    font-size: 0.9rem;
    border-bottom: 1px solid #BCBECD;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
    width: 100%;

    :focus {
        outline: none;
        border: none;
        box-shadow: 0 1px 0 0 #252C46;
    }

    @media (min-width: ${breakpoints.md}) {
        font-size: 1rem;
    }
`;

export const FormInput = styled.input`
    ${inputStyles};
`;

export const TextAreaContainer = styled.textarea`
    color: #bcbecd;
    font-family: "Nunito Sans", sans-serif;
    ${inputStyles}
`;
