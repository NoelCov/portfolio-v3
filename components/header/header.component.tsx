import React from "react";

import Image from "next/image";
import Link from "next/link";

import pic from "../../public/images/hero.png";

const HeaderComponent = () => {
    return (
        <section id="header" className="mt-20 lg:mt-0 lg:h-screen">
            <div className="h-full flex justify-center flex-col">
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:justify-items-center 2xl:max-w-screen-2xl">
                    <div className="flex flex-col text-textColor gap-8 xl:gap-12 2xl:gap-14">
                        <div>
                            <p className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl">
                                {"Hello, I'm"}
                            </p>
                            <h1 className="text-4xl lg:text-5xl 2xl:text-7xl font-bold text-primaryColor">
                                Noel Covarrubias
                            </h1>
                            <p className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl inline">
                                {"and I'm a "}
                            </p>
                            <p className="inline text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl border-b-2 border-secondaryColor font-bold">
                                Software Engineer.
                            </p>
                        </div>
                        <div className="w-full md:w-2/3 lg:w-full text-gray lg:text-lg xl:w-4/5 2xl:text-xl 2xl:w-4/5">
                            {"I’m a self-taught Software Engineer based in California. I have a passion for full-stack software development, " +
                                "artificial intelligence and robotics. I have over a year of professional work experience. Besides programming, I also enjoy to listen to music, play video games, read and to work out."}
                        </div>
                        <Link href="/#contact" passHref>
                            <div className="rounded-md cursor-pointer bg-accentColor w-48 lg:w-64 py-2 text-center hover:op transition duration-300 hover:bg-accentColorShade ease-in-out shadow shadow-gray">
                                CONTACT ME
                            </div>
                        </Link>
                    </div>
                    <div className="hidden lg:block lg:relative lg:col-start-2 w-4/5 xl:w-5/6 2xl:w-4/5">
                        <div className="relative pb-[100%] border-l-2 border-b-2 border-primaryColor rounded-xl">
                            {/* Image by
                    <a href="https://www.freepik.com/free-vector/online-games-illustration_8141684.htm#query=cartoon%20programmer&position=27&from_view=keyword&track=ais">
                        Freepik
                    </a> */}
                            <Image
                                className="rounded"
                                src={pic}
                                layout="fill"
                                alt="Noel Covarrubias profile"
                                priority={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderComponent;
