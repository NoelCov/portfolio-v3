import styled, { css } from "styled-components";

const styles = css`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #f09b00;
  }
`;

export const FooterContainer = styled.div`
  width: 100vw;
  background-color: #161616;
  display: flex;
  padding: 20px 50px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    padding: 30px 25px;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    padding: 50px 0;
    gap: 50px;
  }
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  gap: 50px;

  @media screen and (max-width: 900px) {
    gap: 30px;
  }
`;

export const FooterIconContainer = styled.a`
  font-size: 1.5rem;
  ${styles};
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: column;
  gap: 20px;
  text-align: center;

  @media screen and (max-width: 900px) {
    gap: 15px;
    display: flex;
  }

  @media screen and (max-width: 550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 10px;
  }
`;

export const FooterLinkContainer = styled.a`
  ${styles};
`;
