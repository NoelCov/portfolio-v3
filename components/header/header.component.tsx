import React from "react";

import Image from "next/image";
import pic from "../../public/images/linkedin.jpg";

import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div className="block lg:grid lg:grid-cols-2">
            <div className="flex flex-col text-black gap-10 items-start mt-5 lg:mt-0 xl:self-center">
                <div>
                    <p className="text-xl md:text-2xl lg:text-3xl">
                        {"Hello, I'm"}
                    </p>
                    <h1 className="text-4xl lg:text-6xl xl:text-8xl text-secondaryColor">
                        Noel Covarrubias
                    </h1>
                    <p className="text-2xl lg:text-3xl xl:text-5xl inline">
                        {"and I'm a "}
                    </p>
                    <p className="inline text-2xl lg:text-3xl xl:text-5xl border-b-2 border-primaryColor">
                        Software Engineer.
                    </p>
                </div>
                <div className="md:w-2/3 lg:w-1/2 xl:w-2/3">
                    {"I’m a self-taught Software Engineer based in California. I have an interest in full-stack software development, " +
                        "artificial intelligence and robotics. I have over a year of professional work experience. Besides programming, I also enjoy to listen to music, play video games, read and to work out."}
                </div>
                <Link href="/contact" passHref>
                    <div className="rounded-md cursor-pointer bg-primaryColor w-48 lg:w-64 py-2 text-center hover:bg-secondaryColor transition duration-300 ease-in-out">
                        CONTACT ME
                    </div>
                </Link>
            </div>
            <div className="hidden lg:flex lg:relative xl:w-3/5 lg:h-[600px] self-center justify-self-center">
                <Image src={pic} layout="fill" alt="Noel Covarrubias profile" />
            </div>
        </div>
    );
};

export default HeaderComponent;
