import React, { useState } from "react";

import onClickOutside from "react-onclickoutside";

import Link from "next/link";

const NavbarComponent = () => {
    const [hidden, toggleHidden] = useState(true);

    const onClick = () => toggleHidden(!hidden);

    NavbarComponent.handleClickOutside = () => toggleHidden(true);

    //TODO update this to have an icon (navbar title)
    return (
        <nav className="w-100 flex justify-between items-center bg-backgroundColor p-5 md:p-8 2xl:px-14">
            <Link href="/" passHref>
                <p className="text-xl md:text-2xl lg:text-3xl text-primaryColor cursor-pointer ">
                    NOEL CODES
                </p>
            </Link>
            <div
                className="flex md:hidden flex-col items-center z-30 gap-1.5"
                onClick={onClick}
            >
                <span className="w-10 bg-black h-0.5 rounded-full"></span>
                <span className="w-10 bg-black h-0.5 rounded-full"></span>
                <span className="w-10 bg-black h-0.5 rounded-full"></span>
            </div>
            <div
                className={`flex flex-col md:flex-row text-black h-screen md:h-auto w-80 md:w-auto justify-center items-center fixed md:static top-0 ${
                    hidden ? "-right-96" : "right-0"
                } md:right-0 z-20 gap-20 md:gap-7 bg-backgroundColorShade md:bg-backgroundColor shadow-2xl shadow-black md:shadow-none md:drop-shadow-none transition-right duration-300 ease-in-out`}
            >
                <Link href="/" passHref>
                    <a
                        className="md:hover:text-accentColorShade transition duration-300 ease-out"
                        onClick={onClick}
                    >
                        Home
                    </a>
                </Link>
                <Link href="/#projects" passHref>
                    <a
                        className="md:hover:text-accentColorShade transition duration-300 ease-out"
                        onClick={onClick}
                    >
                        Projects
                    </a>
                </Link>
                <Link href="/#experience" passHref>
                    <a
                        className="md:hover:text-accentColorShade transition duration-300 ease-out"
                        onClick={onClick}
                    >
                        Work experience
                    </a>
                </Link>
                <Link href="/blog" passHref>
                    <a
                        className="md:hover:text-accentColorShade transition duration-300 ease-out"
                        onClick={onClick}
                    >
                        Blog
                    </a>
                </Link>
                <Link href="/contact" passHref>
                    <a
                        className="md:hover:text-accentColorShade transition duration-300 ease-out"
                        onClick={onClick}
                    >
                        Contact
                    </a>
                </Link>
            </div>
        </nav>
    );
};

const clickOutsideConfig = {
    handleClickOutside: () => NavbarComponent.handleClickOutside,
};

export default onClickOutside(NavbarComponent, clickOutsideConfig);
