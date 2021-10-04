import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8vh 0;
  gap: 60px;
  width: 100%;
`;

export const ContactFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
  gap: 40px;
  padding: 5vh 0;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    width: 70%;
    margin: 0 auto;
    gap: 60px;
  }

  @media screen and (max-width: 550px) {
    width: 80%;
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
  display: flex;
  align-items: center;
  cursor: pointer;
  max-width: 235px;
  padding: 0;
  border: none;
  font-family: "Nunito Sans", sans-serif;
  background-color: inherit;

  @media screen and (max-width: 550px) {
    max-width: 200px;
  }
`;

export const ErrorMessage = styled.p`
  margin: 2vh 0;
  color: orange;
  font-size: 2rem;
  border-bottom: 1px solid red;
`;
