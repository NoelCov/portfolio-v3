import React from "react";

import Link from "next/link";

import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { FaTwitch } from "@react-icons/all-files/fa/FaTwitch";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";

import {
  FooterContainer,
  FooterIconsContainer,
  FooterLinksContainer,
  FooterLinkContainer,
  FooterIconContainer,
} from "./footer.styles";

const FooterComponent = () => {
  return (
    <FooterContainer>
      <span>Noel Codes Copyright: &copy; 2021</span>
      <FooterIconsContainer>
        <FooterIconContainer
          href="https://twitter.com/noel_codes"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiOutlineTwitter />
        </FooterIconContainer>
        <FooterIconContainer
          href="https://www.twitch.tv/no3lcodes"
          rel="noreferrer noopener"
          target="_blank"
        >
          <FaTwitch />
        </FooterIconContainer>
        <FooterIconContainer
          href="https://www.youtube.com/channel/UCuaVuPAgcEWT_VRRfMu_bbQ"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiFillYoutube />
        </FooterIconContainer>
      </FooterIconsContainer>
      <FooterLinksContainer>
        <Link href="/projects" passHref>
          <FooterLinkContainer>Projects</FooterLinkContainer>
        </Link>
        <Link href="/contact" passHref>
          <FooterLinkContainer>Contact</FooterLinkContainer>
        </Link>
        <Link href="/blog" passHref>
          <FooterLinkContainer>Blog</FooterLinkContainer>
        </Link>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default FooterComponent;
