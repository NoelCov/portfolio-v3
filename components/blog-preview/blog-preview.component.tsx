import React from "react";

import {
    BlogPreviewContainer,
    ButtonContainer,
    PreviewTitle,
    PreviewText,
    PreviewDate,
} from "./blog-preview.styles";

import ButtonComponent, { colors } from "../button/button.component";
import Link from "next/link";

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
        <BlogPreviewContainer>
            <PreviewTitle>{title}</PreviewTitle>
            <PreviewText>{summary}</PreviewText>
            <PreviewDate>{date}</PreviewDate>
            <ButtonContainer>
                <Link passHref href={`/blogs/${id}`}>
                    <a>
                        <ButtonComponent
                            bgColor={colors.lightBlue}
                            text={"READ MORE"}
                        />
                    </a>
                </Link>
            </ButtonContainer>
        </BlogPreviewContainer>
    );
};

export default BlogComponent;
