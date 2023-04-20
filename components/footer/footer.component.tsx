import React from "react";

import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillYoutube } from "@react-icons/all-files/ai/AiFillYoutube";
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin";

const FooterComponent = (): JSX.Element => {
    return (
        <div className="w-screen py-10 px-4 bg-accentColorShade border-t border-accentColor flex flex-col items-center gap-8">
            <p className="text-sm">
                {'Built and desgined by Noel "Codes" Covarrubias'}
            </p>
            <div className="flex gap-10 text-xl">
                <a
                    href="https://www.linkedin.com/in/noelcodes/"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <AiOutlineLinkedin />
                </a>
                <a
                    href="https://www.youtube.com/channel/UCuaVuPAgcEWT_VRRfMu_bbQ"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <AiFillYoutube />
                </a>
                <a
                    href="https://twitter.com/noel_codes"
                    rel="noreferrer noopener"
                    target="_blank"
                >
                    <AiOutlineTwitter />
                </a>
            </div>
        </div>
    );
};

export default FooterComponent;
