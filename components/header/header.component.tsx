import React from "react";

import Image from "next/dist/client/image";

import Link from "next/link";

import Button from "../button/button.component";

import {
    HeaderContainer,
    HeaderTextContainer,
    HeaderTitleContainer,
    HeaderTitle,
    ImageContainer,
    HeaderTitleP,
    ButtonContainer,
} from "./header.styles";

const HeaderComponent = () => (
    <HeaderContainer>
        <HeaderTitleContainer>
            <HeaderTitleP>{"Hello, I'm"}</HeaderTitleP>
            <HeaderTitle>NOEL</HeaderTitle>
            <HeaderTitleP>
                {"a "}
                <HeaderTitleP className="coloredText">
                    {"Software Engineer."}
                </HeaderTitleP>
            </HeaderTitleP>
        </HeaderTitleContainer>
        <ImageContainer>
            <Image
                src="/images/linkedin.jpg"
                width={1753}
                height={2401}
                priority={true}
                alt="Noel Covarrubias"
                layout="responsive"
            />
        </ImageContainer>
        <HeaderTextContainer>
            {"Hey, I'm Noel. I'm a self-taught software engineer. Besides programming, which is what I do almost all day, I also enjoy reading, working out, playing video games, and learning about other topics." +
                " I'm always looking for new opportunities where I can grow and learn, if you have anything interesting feel free to reach out."}
        </HeaderTextContainer>
        <ButtonContainer>
            <Link href="/contact">
                <a>
                    <Button text={"CONTACT ME"} />
                </a>
            </Link>
        </ButtonContainer>
    </HeaderContainer>
);

export default HeaderComponent;
