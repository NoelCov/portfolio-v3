import styled from "styled-components";

export const HeaderContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5vh 0;
  gap: 25px;

  @media screen and (max-width: 1200px) {
    gap: 30px;
  }

  @media screen and (max-width: 900px) {
    gap: 20px;
  }

  @media screen and (max-width: 550px) {
    padding: 4vh 0;
    gap: 10px;
  }
`;

export const HeaderTextContainer = styled.div `
  width: 50%;
  
  @media screen and (max-width: 900px) {
    width: 65%;
  }
`;