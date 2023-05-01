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

const Project = ({
    imageSrc,
    imageWidth,
    imageHeight,
    projectContent,
    projectTitle,
    websiteURL,
    toolsUsed,
}: projectContainerProps): JSX.Element => (
    <div className="flex flex-col w-full relative bg-lightGray p-6 rounded xl:h-[550px] xl:justify-center">
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
        <div className="flex flex-col gap-4 text-gray">
            <p className="text-lg font-bold text-black">{projectTitle}</p>
            <p>{projectContent}</p>
            <div className="flex flex-wrap gap-2 text-sm">
                <p className="text-sm font-bold">Tools used:</p>
                {toolsUsed.map((tool, key) => {
                    return <p key={key}>- {tool}</p>;
                })}
            </div>
            <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                <div className="rounded-md cursor-pointer bg-accentColor w-40 lg:w-64 py-2 text-center hover:bg-accentColorShade transition duration-300 ease-in-out shadow shadow-gray text-black">
                    View project
                </div>
            </a>
        </div>
    </div>
);

export default Project;
