import styled, { css } from "styled-components";

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  font-size: 1rem;
  color: #bcbdd0;
`;

const inputStyles = css`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  border-bottom: 1px solid white;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  :focus {
    outline: none;
    border: none;
    box-shadow: 0 2px 0 0 #2b79a2;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  @media screen and (max-width: 550px) {
    font-size: 0.9rem;
  }
`;

export const FormInput = styled.input`
  ${inputStyles};
`;

export const TextAreaContainer = styled.textarea`
  color: white;
  font-family: "Nunito Sans", sans-serif;
  ${inputStyles}
`;
