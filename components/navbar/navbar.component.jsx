import React, { useEffect, useState } from "react";

import onClickOutside from "react-onclickoutside";

import Link from "next/link";

const NavbarComponent = () => {
    const [hidden, toggleHidden] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const onClick = () => toggleHidden(!hidden);

    NavbarComponent.handleClickOutside = () => toggleHidden(true);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        console.log(isSticky);
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    console.log(isSticky);

    //TODO update this to have an icon (navbar title)
    return (
        <nav
            className={`w-100 flex justify-between items-center bg-backgroundColor p-5 md:p-8 2xl:px-14 ${
                isSticky
                    ? "fixed top-0 w-full z-30 bg-black opacity-95"
                    : "relative"
            } transition-all duration-300 ease-in-out`}
        >
            <Link href="/" passHref>
                <p
                    className={`text-xl md:text-2xl lg:text-3xl cursor-pointer ${
                        isSticky ? "text-white" : "text-primaryColor "
                    }`}
                >
                    NOEL CODES
                </p>
            </Link>
            <div
                className="flex lg:hidden flex-col items-center z-30 gap-1.5"
                onClick={onClick}
            >
                <span
                    className={`w-10 h-0.5 rounded-full ${
                        isSticky ? "bg-white" : "bg-black"
                    }`}
                ></span>
                <span
                    className={`w-10 h-0.5 rounded-full ${
                        isSticky ? "bg-white" : "bg-black"
                    }`}
                ></span>
                <span
                    className={`w-10 h-0.5 rounded-full ${
                        isSticky ? "bg-white" : "bg-black"
                    }`}
                ></span>
            </div>
            <div
                className={`flex flex-col lg:flex-row h-screen w-80 justify-center items-center fixed top-0 
                z-20 gap-20 shadow-2xl shadow-black transition-right duration-300 ease-in-out 
                md:w-2/3 lg:gap-7 lg:right-0 lg:shadow-none lg:h-auto lg:w-auto lg:static ${
                    hidden ? "-right-80 md:-right-2/3" : "right-0"
                } ${
                    isSticky
                        ? "bg-black text-white"
                        : "bg-lightGray text-black lg:bg-backgroundColor"
                }`}
            >
                <Link href="/#header" passHref>
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
