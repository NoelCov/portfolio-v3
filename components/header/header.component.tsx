import React from "react";

import {
  HeaderContainer,
  HeaderImageContainer,
  HeaderTextContainer,
} from "./header.styles";

import Image from "next/image";
import Link from "next/link";

import SectionTitle from "../utils/section-title.component";
import Button from "../button/button.component";

const HeaderComponent = () => (
  <HeaderContainer>
    <SectionTitle>
      NOEL<span> &nbsp;</span>CODES
    </SectionTitle>
    <HeaderImageContainer>
      <Image
        src="/images/noelcodeshero.jpg"
        width={6000}
        height={4000}
        alt="me"
      />
    </HeaderImageContainer>
    <HeaderTextContainer>
      Hey, I’m Noel, a self-taught software developer. I’m currently open to
      work. Besides programming, which is what I do almost all day I also enjoy
      to read, work out, play video games and be with my girlfriend.
    </HeaderTextContainer>
    <Link href="/contact">
      <a>
        <Button>CONTACT ME</Button>
      </a>
    </Link>
  </HeaderContainer>
);

export default HeaderComponent;
