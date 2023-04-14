import React from "react";

import Image from "next/image";
import pic from "../../public/images/linkedin.jpg";

import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div className="block lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center">
            <div className="flex flex-col text-black gap-10 lg:gap-14 items-start">
                <div>
                    <p className="text-xl md:text-2xl lg:text-3xl">
                        {"Hello, I'm"}
                    </p>
                    <h1 className="text-4xl lg:text-6xl text-secondaryColor">
                        Noel Covarrubias
                    </h1>
                    <p className="text-2xl lg:text-3xl xl:text-4xl inline">
                        {"and I'm a "}
                    </p>
                    <p className="inline text-2xl lg:text-3xl xl:text-4xl border-b-2 border-primaryColor">
                        Software Engineer.
                    </p>
                </div>
                <div className="md:w-2/3 lg:w-full xl:w-2/3">
                    {"I’m a self-taught Software Engineer based in California. I have an interest in full-stack software development, " +
                        "artificial intelligence and robotics. I have over a year of professional work experience. Besides programming, I also enjoy to listen to music, play video games, read and to work out."}
                </div>
                <Link href="/contact" passHref>
                    <div className="rounded-md cursor-pointer bg-primaryColor w-48 lg:w-64 py-2 text-center hover:bg-secondaryColor transition duration-300 ease-in-out">
                        CONTACT ME
                    </div>
                </Link>
            </div>
            <div className="hidden lg:block lg:relative lg:col-start-2 w-4/5 xl:w-4/5 2xl:w-3/5">
                <div className="relative pb-[100%] shadow-lg shadow-accentColor">
                    <Image
                        className="rounded"
                        src={pic}
                        layout="fill"
                        alt="Noel Covarrubias profile"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;
