import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
  width: 100vw;
  background-color: #161616;
  display: flex;
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

export const FooterLinksContainer = styled.div`
  display: flex;
  gap: 20px;
  text-align: center;

  @media screen and (max-width: 660px) {
    gap: 15px;
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 50%;
  }
`;

const styles = css`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover {
  color: #f09b00;
}
`

export const FooterLinkContainer = styled.a`
  ${styles};
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
  ${styles};

  @media screen and (max-width: 900px) {
    font-size: 1.2rem;
  }
`;
