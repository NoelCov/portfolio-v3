import React from "react";

import BlogComponent from "../blog-preview/blog-preview.component";
import SectionTitle from "../../utils/section-title.component";

import { BlogsContainer } from "./blogs-container.styles";

interface BlogsContainerProps {
    blogs: { date: string; title: string; id: string; summary: string }[];
}

const BlogsContainerComponent = ({
    blogs,
}: BlogsContainerProps): JSX.Element => (
    <section className="flex flex-col mt-20 w-full">
        <h1 className="text-primaryColor text-2xl lg:text-4xl mb-4 lg:mb-10 font-bold">
            Blogs
        </h1>
        <div className="flex flex-col gap-12 lg:items-center xl:gap-20">
            {blogs.map(({ id, date, title, summary }) => {
                return (
                    <BlogComponent
                        id={id}
                        key={id}
                        date={date}
                        title={title}
                        summary={summary}
                    />
                );
            })}
        </div>
    </section>
);

export default BlogsContainerComponent;
