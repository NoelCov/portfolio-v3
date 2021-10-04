import styled, { css } from "styled-components";

export const LabelInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
  font-size: 1.2rem;

  @media screen and (max-width: 550px) {
    font-size: 1rem;
  }
`;

const inputStyles = css`
  background-color: #121212;
  border: none;
  placeholder-color: white;
  font-size: 1.1rem;
  border-bottom: 1px solid white;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;

  :focus {
    outline: none;
    border: none;
    box-shadow: 0 2px 0 0 #1b4e51;
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
