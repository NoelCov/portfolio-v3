import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100vw;
  background-color: #161923;
  color: #bcbdd0;
  display: flex;
  min-height: 5vh;
  padding: 30px 50px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    padding: 30px 25px;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    padding: 25px 0;
    gap: 50px;
  }
`;

export const FooterSocialsContainer = styled.div`
  display: flex;
  gap: 50px;

  @media screen and (max-width: 900px) {
    gap: 25px;
  }
`;

export const FooterSocialContainer = styled.a`
  font-size: 1.5rem;
  display: flex;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #2b79a2;
  }

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
`;
