import React from "react";

import Image from "next/image";

interface projectContainerProps {
    imageSrc: string;
    imageWidth: number;
    imageHeight: number;
    projectContent: string;
    projectTitle: string;
    websiteURL: string;
    toolsUsed: string[];
}
//TODO Finish this for XL and 2XL screens. Make text bigger, make container have 2 columns and be a grid etc.
const Project = ({
    imageSrc,
    imageWidth,
    imageHeight,
    projectContent,
    projectTitle,
    websiteURL,
    toolsUsed,
}: projectContainerProps): JSX.Element => (
    <div className="flex flex-col w-full relative bg-backgroundColorShade p-6 rounded shadow shadow-lighterBlack xl:h-[550px] xl:justify-center">
        <div className="hidden lg:relative lg:block self-center hover:scale-[1.02] transition duration-300 ease-out mb-4">
            <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                <Image
                    layout="intrinsic"
                    alt="Project"
                    src={imageSrc}
                    height={imageHeight}
                    width={imageWidth}
                    className="rounded"
                />
            </a>
        </div>
        <div className="flex flex-col gap-4">
            <p className="text-lg font-bold text-primaryColor">
                {projectTitle}
            </p>
            <p>{projectContent}</p>
            <div className="flex flex-wrap gap-2 text-sm">
                <p className="text-sm font-bold text-primaryColor">
                    Tools used:
                </p>
                {toolsUsed.map((tool, key) => {
                    return (
                        <p key={key} className="">
                            - {tool}
                        </p>
                    );
                })}
            </div>
            <div className="rounded-md cursor-pointer bg-accentColor w-40 lg:w-64 py-2 text-center hover:bg-accentColorShade transition duration-300 ease-in-out shadow shadow-black">
                View project
            </div>
        </div>
    </div>
);

export default Project;
