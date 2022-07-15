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
    <BlogsContainer>
        <SectionTitle>BLOG</SectionTitle>
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
    </BlogsContainer>
);

export default BlogsContainerComponent;
