import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8vh 0;
  gap: 60px;

  @media screen and (max-width: 550px) {
    padding: 6vh 0;
  }
`;

export const HeaderTextContainer = styled.div`
  max-width: 45%;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;

  @media screen and (max-width: 900px) {
    max-width: 75%;
  }

  @media screen and (max-width: 550px) {
    max-width: 95%;
    font-size: 1rem;
  }
`;
