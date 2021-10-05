import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import {
  NavbarContainer,
  NavbarLinksContainer,
  NavbarSVGContainer,
  NavbarLink,
  NavbarMobileMenu,
  NavbarMobileLines,
} from "./navbar.styles";

const NavbarComponent = () => {
  const [hidden, toggleHidden] = useState(true);

  const onClick = () => {
    toggleHidden(!hidden);
  }

  return (
    <NavbarContainer>
      <Link href="/">
        <a rel="noopener noreferrer">
          <NavbarSVGContainer>
            <Image
              src="/images/noelcodesicon.svg"
              width="131"
              height="86"
              alt="navbar icon"
            />
          </NavbarSVGContainer>
        </a>
      </Link>
      <NavbarMobileMenu onClick={onClick}>
        <NavbarMobileLines />
        <NavbarMobileLines />
        <NavbarMobileLines />
      </NavbarMobileMenu>
      <NavbarLinksContainer hidden={hidden}>
        <Link href="/projects" passHref>
          <NavbarLink onClick={onClick}>PROJECTS</NavbarLink>
        </Link>
        <Link href="/contact" passHref>
          <NavbarLink onClick={onClick}>CONTACT</NavbarLink>
        </Link>
        <Link href="/" passHref>
          <NavbarLink onClick={onClick}>BLOG</NavbarLink>
        </Link>
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};

export default NavbarComponent;
