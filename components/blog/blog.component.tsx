import {
    InformationContainer,
    ContentContainer,
    BlogTitle,
    Date,
    ArticleContainer,
} from "./blog.styles";

interface BlogProps {
    title: string;
    date: string;
    content: string;
}

const BlogComponent = ({ title, date, content }: BlogProps): JSX.Element => {
    return (
        // <section className="mt-40 flex flex-col gap-4 bg-lightGray">
        //     <p className="text-xl text-black">{title}</p>
        //     <p className="text-sm">{date}</p>
        // </section>
        <ArticleContainer>
            <InformationContainer>
                <BlogTitle>{title}</BlogTitle>
                <Date>{date}</Date>
            </InformationContainer>
            <ContentContainer dangerouslySetInnerHTML={{ __html: content }} />
        </ArticleContainer>
    );
};

export default BlogComponent;
