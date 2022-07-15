import { GetStaticPaths, GetStaticProps } from "next";

import LayoutComponent from "../../components/layout/layout.component";

import { getAllPostsIds, getPostData } from "../../utils/posts";

import BlogComponent from "../../components/blog/blog.component";

const BlogPage = ({
    postData,
}: {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
}) => {
    return (
        <LayoutComponent>
            <BlogComponent
                title={postData.title}
                content={postData.contentHtml}
                date={postData.date}
            />
        </LayoutComponent>
    );
};

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostsIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params?.id as string);
    return {
        props: {
            postData,
        },
    };
};
