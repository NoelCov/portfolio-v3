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
