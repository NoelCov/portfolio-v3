import React from "react";

import Link from "next/link";

import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinkContainer,
  FooterSocialsContainer,
  FooterSocialContainer,
} from "./footer.styles";

import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaTwitch } from "@react-icons/all-files/fa/FaTwitch";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <span>Noel Codes Copyright: &copy; 2022</span>
      <FooterSocialsContainer>
        <FooterSocialContainer
          href="https://twitter.com/noel_codes"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiOutlineTwitter />
        </FooterSocialContainer>
        <FooterSocialContainer
          href="https://www.twitch.tv/no3lcodes"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaTwitch />
        </FooterSocialContainer>
        <FooterSocialContainer
          href="https://www.youtube.com/channel/UCuaVuPAgcEWT_VRRfMu_bbQ"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiFillYoutube />
        </FooterSocialContainer>
        <FooterSocialContainer
          href="https://www.linkedin.com/in/noelcodes/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiOutlineLinkedin />
        </FooterSocialContainer>
      </FooterSocialsContainer>
      <FooterLinksContainer>
        <Link href="/projects" passHref>
          <FooterLinkContainer>Projects</FooterLinkContainer>
        </Link>
        <Link href="/contact" passHref>
          <FooterLinkContainer>Contact</FooterLinkContainer>
        </Link>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default FooterComponent;
