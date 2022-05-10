import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  max-width: 100vw;
  background-color: #161923;
  color: #bcbdd0;
  min-height: 5vh;
  padding: 25px 60px 25px 30px;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    padding: 20px 30px;
  }

  @media screen and (max-width: 550px) {
    justify-content: space-between;
    padding: 15px 20px;
  }
`;

export const NavbarLinksContainer = styled.div`
  list-style: none;
  display: flex;
  gap: 40px;

  @media screen and (max-width: 900px) {
    gap: 25px;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    height: 100vh;
    background-color: #1e1e1e;
    align-items: center;
    width: 300px;
    position: fixed;
    right: ${(props) => (props.hidden ? "-350px" : 0)};
    top: 0;
    padding-top: 15vh;
    gap: 80px;
    z-index: 2;
    transition: right 350ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const NavbarMobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  display: none;
  gap: 5px;
  width: 45px;
  height: 45px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  z-index: 3;
  background-color: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media screen and (max-width: 550px) {
    display: flex;
  }
`;

export const NavbarMobileLines = styled.span`
  width: 22.5px;
  height: 2px;
  background-color: #bcbdd0;
  border-radius: 5px;
`;

export const NavbarTitle = styled.p`
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;
  font-family: Poppins;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
  }
`;
