import React from "react";

import Image from "next/image";
import pic from "../../public/images/removebg.png";

import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div className="block lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center 2xl:max-w-screen-2xl">
            <div className="flex flex-col text-black gap-10 xl:gap-12 2xl:gap-14 items-start">
                <div>
                    <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
                        {"Hello, I'm"}
                    </p>
                    <h1 className="text-4xl lg:text-5xl 2xl:text-7xl text-primaryColor">
                        Noel Covarrubias
                    </h1>
                    <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl inline">
                        {"and I'm a "}
                    </p>
                    <p className="inline text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl border-b-2 border-accentColor">
                        Software Engineer.
                    </p>
                </div>
                <div className="w-4/5 md:w-2/3 lg:w-full text-lighterBlack lg:text-lg xl:w-4/5 2xl:text-xl 2xl:w-4/5">
                    {"I’m a self-taught Software Engineer based in California. I have an interest in full-stack software development, " +
                        "artificial intelligence and robotics. I have over a year of professional work experience. Besides programming, I also enjoy to listen to music, play video games, read and to work out."}
                </div>
                <Link href="/contact" passHref>
                    <div className="rounded-md cursor-pointer bg-accentColor w-48 lg:w-64 py-2 text-center hover:bg-accentColorShade transition duration-300 ease-in-out shadow shadow-black">
                        CONTACT ME
                    </div>
                </Link>
            </div>
            <div className="hidden lg:block lg:relative lg:col-start-2 w-4/5 xl:w-5/6 2xl:w-4/5">
                <div className="relative pb-[100%] border-l-2 border-b-2 border-primaryColor rounded">
                    <Image
                        className="rounded"
                        src={pic}
                        layout="fill"
                        alt="Noel Covarrubias profile"
                        priority={true}
                    />
                </div>
                {/* Image by{" "}
                <a href="https://www.freepik.com/free-vector/online-games-illustration_8141684.htm#query=cartoon%20programmer&position=27&from_view=keyword&track=ais">
                    Freepik
                </a> */}
                {/* Give credit:
                <a href="https://www.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_11602236.htm#query=cartoon%20programmer&position=0&from_view=keyword&track=ais">Image by catalyststuff</a> on Freepik */}
                {/* Image by{" "}
                <a href="https://www.freepik.com/free-vector/hand-drawn-rpa-illustration_21902269.htm#page=3&query=cartoon%20programmer&position=3&from_view=keyword&track=ais">
                    Freepik
                </a> */}
            </div>
        </div>
    );
};

export default HeaderComponent;
