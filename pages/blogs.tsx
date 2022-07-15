import { NextPage } from "next";
import BlogsContainerComponent from "../components/blogs-container/blogs-container.component";

import LayoutComponent from "../components/layout/layout.component";
import { getSortedPostsData } from "../utils/posts";

const BlogPage = ({
    allPostsData,
}: {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        summary: string;
    }[];
}) => (
    <div>
        <LayoutComponent>
            <BlogsContainerComponent blogs={allPostsData} />
        </LayoutComponent>
    </div>
);

export default BlogPage;

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
