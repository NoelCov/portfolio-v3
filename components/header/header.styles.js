import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media screen and (max-width: 550px) {
    padding: 4vh 0;
  }
`;

export const HeaderTextContainer = styled.p`
  max-width: 35%;
  line-height: 1.5;

  @media screen and (max-width: 900px) {
    max-width: 75%;
  }

  @media screen and (max-width: 550px) {
    max-width: 95%;
  }
`;
