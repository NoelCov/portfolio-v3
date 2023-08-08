import React, { useEffect, useState } from "react";

import onClickOutside from "react-onclickoutside";

import Link from "next/link";
import CustomLink from "../custom-link/link.component";

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
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    return (
        <nav
            className={`w-100 flex justify-between items-center  p-5 md:p-8 2xl:px-14 ${
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
                        : "bg-lightGray text-black lg:bg-bgColor"
                }`}
            >
                <Link href="/" passHref>
                    <CustomLink content="Home" onClick={onClick} />
                </Link>
                <Link href="/#experience" passHref>
                <CustomLink content="Work experience" onClick={onClick} />
                </Link>
                <Link href="/#projects" passHref>
                    <CustomLink content="Projects" onClick={onClick} />
                </Link>
                <Link href="/#contact" passHref>
                    <CustomLink content="Contact" onClick={onClick} />
                </Link>
                <CustomLink content="Blog" onClick={onClick} target="_blank" href="https://no3lcodes.hashnode.dev/" />
            </div>
        </nav>
    );
};



const clickOutsideConfig = {
    handleClickOutside: () => NavbarComponent.handleClickOutside,
};

export default onClickOutside(NavbarComponent, clickOutsideConfig);
