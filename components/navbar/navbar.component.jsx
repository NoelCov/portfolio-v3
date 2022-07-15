import React, { useState } from "react";

import onClickOutside from "react-onclickoutside";

import Link from "next/link";

import {
    NavbarContainer,
    NavbarLinksContainer,
    NavbarMobileMenu,
    NavbarMobileLines,
    NavbarTitle,
} from "./navbar.styles";

const NavbarComponent = () => {
    const [hidden, toggleHidden] = useState(true);

    const onClick = () => toggleHidden(!hidden);

    NavbarComponent.handleClickOutside = () => toggleHidden(true);

    return (
        <NavbarContainer>
            <Link href="/">
                <NavbarTitle>NOEL CODES</NavbarTitle>
            </Link>
            <NavbarMobileMenu onClick={onClick}>
                <NavbarMobileLines />
                <NavbarMobileLines />
                <NavbarMobileLines />
            </NavbarMobileMenu>
            <NavbarLinksContainer hidden={hidden}>
                <Link href="/" passHref>
                    <a onClick={onClick}>HOME</a>
                </Link>
                <Link href="/projects" passHref>
                    <a onClick={onClick}>PROJECTS</a>
                </Link>
                <Link href="/blogs" passHref>
                    <a onClick={onClick}>BLOG</a>
                </Link>
                <Link href="/contact" passHref>
                    <a onClick={onClick}>CONTACT</a>
                </Link>
            </NavbarLinksContainer>
        </NavbarContainer>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => NavbarComponent.handleClickOutside,
};

export default onClickOutside(NavbarComponent, clickOutsideConfig);
