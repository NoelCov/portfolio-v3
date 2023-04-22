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
                className="flex lg:hidden flex-col items-center z-30 gap-1.5"
                onClick={onClick}
            >
                <span className="w-10 bg-black h-0.5 rounded-full"></span>
                <span className="w-10 bg-black h-0.5 rounded-full"></span>
                <span className="w-10 bg-black h-0.5 rounded-full"></span>
            </div>
            <div
                className={`flex flex-col lg:flex-row text-black h-screen w-80 justify-center items-center fixed top-0 
                z-20 gap-20 bg-lightGray shadow-2xl shadow-black transition-right duration-300 ease-in-out 
                md:w-2/3 lg:gap-7 lg:bg-backgroundColor lg:right-0 lg:shadow-none lg:h-auto lg:w-auto lg:static ${
                    hidden ? "-right-80 md:-right-2/3" : "right-0"
                }`}
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
                {/* <Link href="/blog" passHref>
                    <a
                        className="md:hover:text-accentColorShade transition duration-300 ease-out"
                        onClick={onClick}
                    >
                        Blog
                    </a>
                </Link> */}
                <Link href="/#contact" passHref>
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
