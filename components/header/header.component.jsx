import React from "react";

import Image from "next/dist/client/image";

import {
    HeaderContainer,
    HeaderTextContainer,
    HeaderTitleContainer,
    HeaderTitle,
    ImageContainer,
    HeaderTitleP,
    ButtonContainer,
} from "./header.styles";

import Link from "next/link";

import Button from "../button/button.component";

const HeaderComponent = () => (
    <HeaderContainer>
        <HeaderTitleContainer>
            <HeaderTitleP>{"Hello, I'm"}</HeaderTitleP>
            <HeaderTitle>NOEL</HeaderTitle>
            <HeaderTitleP>
                {"a "}
                <HeaderTitleP className="selftaught">
                    {"self-taught"}
                </HeaderTitleP>
                {" developer."}
            </HeaderTitleP>
        </HeaderTitleContainer>
        <ImageContainer>
            <Image
                src="/images/linkedin.jpg"
                width={1753}
                height={2401}
                priority="true"
                alt="Noel Covarrubias"
                layout="responsive"
            />
        </ImageContainer>
        <HeaderTextContainer>
            {"Hey, I'm Noel, I'm a self-taught software engineer. Besides programming, which is what I do almost all day I" +
                "also enjoy to read, work out, play video games and to learn about other topics."}
        </HeaderTextContainer>
        <ButtonContainer>
            <Link href="/contact">
                <a>
                    <Button>CONTACT ME</Button>
                </a>
            </Link>
        </ButtonContainer>
    </HeaderContainer>
);

export default HeaderComponent;
