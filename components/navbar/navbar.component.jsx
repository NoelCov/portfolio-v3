import React, { useState } from "react";

import onClickOutside from "react-onclickoutside";

import Link from "next/link";
import Image from "next/image";

import {
  NavbarContainer,
  NavbarLinksContainer,
  NavbarLink,
  NavbarMobileMenu,
  NavbarMobileLines,
  NavbarImageContainer,
  IconContainer,
  IconContainerText
} from "./navbar.styles";

const NavbarComponent = () => {
  const [hidden, toggleHidden] = useState(true);

  const onClick = () => toggleHidden(!hidden);

  NavbarComponent.handleClickOutside = () => toggleHidden(true);

  return (
    <NavbarContainer>
      <Link href="/">
        <a>
        <IconContainer>
          <NavbarImageContainer>
          <Image
            src="/images/horns.svg"
            width="381"
            height="166"
            alt="navbar icon"
          />
          </NavbarImageContainer>
          <IconContainerText>NOEL CODES</IconContainerText>
          </IconContainer>
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
        <Link href="/blog" passHref>
          <NavbarLink onClick={onClick}>BLOG</NavbarLink>
        </Link>
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NavbarComponent.handleClickOutside
}

export default onClickOutside(NavbarComponent, clickOutsideConfig);
