import styled from "styled-components";
import { breakpoints } from "../../utils/breakpoints";

export const BlogsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @media (min-width: ${breakpoints.lg}) {
        padding: 8vh 0;
    }


`