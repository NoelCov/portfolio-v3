import React from "react";

interface BlogProps {
    date: string;
    title: string;
    id: string;
    summary: string;
}

const BlogComponent = ({
    date,
    title,
    id,
    summary,
}: BlogProps): JSX.Element => {
    return (
        <div className="flex flex-col w-full bg-lightGray p-6 rounded gap-4 lg:w-3/4">
            <p className="text-xl lg:text-2xl text-black font-bold">{title}</p>
            <p className="text-sm">{date}</p>

            <p>{summary}</p>
            <div
                className="rounded-md cursor-pointer bg-accentColor w-48 lg:w-64 py-2 text-center hover:bg-accentColorShade
            transition duration-300 ease-in-out shadow shadow-gray text-black"
            >
                Read more
            </div>
        </div>
    );
};

export default BlogComponent;
