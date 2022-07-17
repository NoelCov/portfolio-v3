import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import LayoutComponent from "../../components/layout/layout.component";
import BlogComponent from "../../components/blog/blog.component";

import { getAllPostsIds, getPostData } from "../../utils/posts";

import LandingImage from "../../public/images/goupandneverstop.jpg";

const BlogPage = ({
    postData,
}: {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
        summary: string;
    };
}) => {
    return (
        <>
            <Head>
                <title>{`Noel Codes | ${postData.title}`}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="author" content="Noel Codes" />
                <meta name="description" content={`${postData.summary}`} />
                <meta name="og:description" content={`${postData.summary}`} />
                <meta name="og:image" content={LandingImage.src} />
                <meta
                    name="twitter:url"
                    content="https://noelcodes.dev/blogs"
                />
                <meta name={`twitter:title ${postData.title}`} />
                <meta
                    name="twitter:description"
                    content={`${postData.summary}`}
                />
                <meta name="twitter:image" content={LandingImage.src} />
                <base target="_blank" />
                <html lang="en-us" />
            </Head>

            <LayoutComponent>
                <BlogComponent
                    title={postData.title}
                    content={postData.contentHtml}
                    date={postData.date}
                />
            </LayoutComponent>
        </>
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
