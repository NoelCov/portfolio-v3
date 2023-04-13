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
        <nav className="w-100 flex justify-between items-center bg-neutral-200 py-4 px-5">
            <Link href="/">
                <p className="text-xl">NOEL CODES</p>
            </Link>
            <div
                className="flex flex-col items-center z-3 gap-1.5"
                onClick={onClick}
            >
                <span className="w-9 bg-black h-0.5 rounded-full"></span>
                <span className="w-9 bg-black h-0.5 rounded-full"></span>
                <span className="w-9 bg-black h-0.5 rounded-full"></span>
            </div>
            <NavbarLinksContainer hidden={hidden}>
                <Link href="/" passHref>
                    <a onClick={onClick}>HOME</a>
                </Link>
                <Link href="/projects" passHref>
                    <a onClick={onClick}>PROJECTS</a>
                </Link>
                <Link href="/blog" passHref>
                    <a onClick={onClick}>BLOG</a>
                </Link>
                <Link href="/contact" passHref>
                    <a onClick={onClick}>CONTACT</a>
                </Link>
            </NavbarLinksContainer>
        </nav>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => NavbarComponent.handleClickOutside,
};

export default onClickOutside(NavbarComponent, clickOutsideConfig);
