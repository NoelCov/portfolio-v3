import React from "react";

import { HeaderContainer, HeaderTextContainer } from "./header.styles";

import Link from "next/link";

import SectionTitle from "../utils/section-title.component";
import Button from "../button/button.component";
import ImageContainerComponent from "../image-container/image-container.component";

const HeaderComponent = () => (
  <HeaderContainer>
    <SectionTitle>
      NOEL<span> &nbsp;</span>CODES
    </SectionTitle>
    <ImageContainerComponent
      src="/images/noelcodeshero.jpg"
      width={6000}
      height={4000}
      alt="Noel Covarrubias aka Noel Codes"
    />
    <HeaderTextContainer>
      Hey, I’m Noel, a self-taught software developer. I’m currently open to
      work. Besides programming, which is what I do almost all day I also enjoy
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
