import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8vh 0;
  gap: 50px;

  @media screen and (max-width: 900px) {
    gap: 50px;
  }

  @media screen and (max-width: 550px) {
    gap: 40px;
    padding: 6vh 0;
  }
`;

export const HeaderImageContainer = styled.div`
  max-width: 60%;

  @media screen and (max-width: 900px) {
    max-width: 80%;
  }

  @media screen and (max-width: 550px) {
    max-width: 95%;
  }
`;

export const HeaderTextContainer = styled.div`
  max-width: 45%;
  text-align: center;
  font-size: 1.4rem;
  line-height: 1.5;

  @media screen and (max-width: 900px) {
    max-width: 75%;
    font-size: 1.2rem;
  }

  @media screen and (max-width: 550px) {
    max-width: 95%;
    font-size: 1rem;
  }
`;
