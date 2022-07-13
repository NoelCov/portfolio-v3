import styled from "styled-components";

import { breakpoints } from "../breakpoints";

export const NavbarContainer = styled.nav`
    display: flex;
    width: 100vw;
    background-color: #161923;
    color: #bcbdd0;
    min-height: 5vh;
    padding: 15px 20px;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${breakpoints.md}) {
        padding: 20px 30px;
    }

    @media (min-width: ${breakpoints.lg}) {
        padding: 25px 60px 25px 30px;
        height: auto;
    }
`;

export const NavbarLinksContainer = styled.div`
    display: flex;
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

    @media (min-width: ${breakpoints.md}) {
        all: unset;
        display: flex;
        gap: 25px;
    }

    @media (min-width: ${breakpoints.lg}) {
        gap: 40px;
    }
`;

export const NavbarMobileMenu = styled.div`
    display: flex;
    flex-direction: column;
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

    @media (min-width: ${breakpoints.md}) {
        display: none;
    }
`;

export const NavbarMobileLines = styled.span`
    width: 22.5px;
    height: 2px;
    background-color: #bcbdd0;
    border-radius: 5px;
`;

export const NavbarTitle = styled.p`
    margin: 0;
    cursor: pointer;
    font-weight: bolder;
    font-family: Poppins;
    font-size: 1.4rem;

    @media (min-width: ${breakpoints.md}) {
        font-size: 1rem;
    }

    @media (min-width: ${breakpoints.xl}) {
        font-size: 1.5rem;
    }
`;
