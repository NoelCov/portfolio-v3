import BlogsContainerComponent from "../components/blogs-container/blogs-container.component";

import LayoutComponent from "../components/layout/layout.component";
import { getSortedPostsData } from "../utils/posts";

import LandingImage from "../public/images/goupandneverstop.jpg";
import Head from "next/head";

interface Props {
    allPostsData: {
        date: string;
        title: string;
        id: string;
        summary: string;
    }[];
}

const BlogPage = ({ allPostsData }: Props): JSX.Element => (
    <>
        <Head>
            <title>Noel Codes | Blog</title>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta name="author" content="Noel Codes" />
            <meta
                name="description"
                content="Noel Codes blogs section. Noel writes blogs about tech, programming, space and improvement."
            />
            <meta
                name="og:description"
                content="Noel Codes blogs section. Noel writes blogs about tech, programming, space and improvement."
            />
            <meta name="og:image" content={LandingImage.src} />
            <meta name="twitter:url" content="https://noelcodes.dev/contact" />
            <meta name="twitter:title" content="Noel Codes | Contact" />
            <meta
                name="twitter:description"
                content="Noel Codes blogs section. Noel writes blogs about tech, programming, space and improvement."
            />
            <meta name="twitter:image" content={LandingImage.src} />
            <html lang="en-us" />
        </Head>
        <LayoutComponent>
            <BlogsContainerComponent blogs={allPostsData} />
        </LayoutComponent>
    </>
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
