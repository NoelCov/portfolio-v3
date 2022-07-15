import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

import { colors } from "../../utils/colorOptions";

export const ArticleContainer = styled.article`
    width: 85%;
    padding: 8vh 0;

    @media screen and (min-width: ${breakpoints.xl}) {
        width: 40vw;
    }
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto 8rem;
`;

export const BlogTitle = styled.h3`
    font-size: 2.8rem;
    margin: 0;
    color: ${colors.yellow};

    @media (min-width: ${breakpoints.lg}) {
        margin-bottom: 2rem;
    }
`;

export const Date = styled.p`
    font-size: 1.2rem;
    margin-bottom: 1rem;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.8rem;
    }

    h3 {
        font-size: 1.6rem;
    }

    p,
    a {
        margin-bottom: 1.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
    }
`;
