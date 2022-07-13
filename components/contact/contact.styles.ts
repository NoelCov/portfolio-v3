import styled, { css } from "styled-components";

import { breakpoints } from "../breakpoints";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    width: 100%;

    @media (min-width: ${breakpoints.xl}) {
        gap: 100px;
    }
`;

export const ContactFormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 2vh 0;
    gap: 60px;
    width: 60%;

    @media (min-width: ${breakpoints.sm}) {
        width: 65%;
    }

    @media (min-width: ${breakpoints.lg}) {
        width: 55%;
    }

    @media (min-width: ${breakpoints.xl}) {
        gap: 40px;
        width: 45%;
    }
`;

const formsStyles = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 60px;
    align-items: center;
`;

export const FormNamesInputContainer = styled.div`
    ${formsStyles}

    @media (min-width: ${breakpoints.sm}) {
        all: unset;
        display: flex;
        gap: 50px;
    }
`;

export const FormInformationContainer = styled.div`
    ${formsStyles};
    flex-direction: column;
    justify-content: center;
`;

export const ButtonContainer = styled.button`
    display: block;
    cursor: pointer;
    max-width: 250px;
    padding: 0;
    border: none;
    font-family: "Nunito Sans", sans-serif;
    background-color: inherit;
    margin: 0 auto;

    @media (min-width: ${breakpoints.sm}) {
        margin: 0;
    }
`;

export const ErrorMessage = styled.p`
    margin: 2vh 0;
    color: orange;
    font-size: 2rem;
    border-bottom: 1px solid red;
`;
