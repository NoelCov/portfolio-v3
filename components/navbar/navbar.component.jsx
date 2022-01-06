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
  LogoContainer,
  LogoContainerText,
} from "./navbar.styles";

const NavbarComponent = () => {
  const [hidden, toggleHidden] = useState(true);

  const onClick = () => toggleHidden(!hidden);

  NavbarComponent.handleClickOutside = () => toggleHidden(true);

  return (
    <NavbarContainer>
      <Link href="/">
        <a>
          <LogoContainer>
            <NavbarImageContainer>
              <Image
                src="/images/gengarsvg.svg"
                width="380"
                height="350"
                alt="navbar icon"
              />
            </NavbarImageContainer>
            <LogoContainerText>NOEL CODES</LogoContainerText>
          </LogoContainer>
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
      </NavbarLinksContainer>
    </NavbarContainer>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => NavbarComponent.handleClickOutside,
};

export default onClickOutside(NavbarComponent, clickOutsideConfig);
