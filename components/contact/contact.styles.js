import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  width: 100%;
`;

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 65%;
  gap: 40px;
  padding: 5vh 0;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    margin: 0 auto;
    width: 60vw;
    gap: 60px;
  }

  @media screen and (max-width: 550px) {
    padding: 2vh 0;
  }
`;

const formsStyles = css`
  display: flex;
  width: 100%;
  gap: 60px;
  align-items: center;

  @media screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

export const FormNamesInputContainer = styled.div`
  ${formsStyles};
  justify-content: space-between;
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

  @media screen and (max-width: 550px) {
    margin: 0 auto;
  }
`;

export const ErrorMessage = styled.p`
  margin: 2vh 0;
  color: orange;
  font-size: 2rem;
  border-bottom: 1px solid red;
`;
