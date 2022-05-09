import React from "react";

import { HeaderContainer, HeaderTextContainer } from "./header.styles";

import Link from "next/link";

import SectionTitle from "../utils/section-title.component";
import Button from "../button/button.component";
import ImageContainerComponent from "../image-container/image-container.component";

const HeaderComponent = () => (
  <HeaderContainer>
    <SectionTitle>
      NOEL<span> &nbsp;</span>COVARRUBIAS
    </SectionTitle>
    <ImageContainerComponent
      src="/images/linkedin.jpg"
      width={550}
      height={650}
      priority="true"
      alt="Noel Covarrubias"
    />
    <HeaderTextContainer>
      Hey, I&apos;m Noel, I&apos;m a self-taught software engineer. Besides programming, which is what I do almost all day I also enjoy
      to read, work out, play video games and to learn about other topics.
    </HeaderTextContainer>
    <Link href="/contact">
      <a>
        <Button>CONTACT ME</Button>
      </a>
    </Link>
  </HeaderContainer>
);

export default HeaderComponent;
