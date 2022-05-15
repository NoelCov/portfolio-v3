import React, { FC } from "react";

import styled from "styled-components";

const SectionTitleContainer = styled.h1`
  font-size: 5.5rem;
  font-family: Manrope;
  margin: 0;
  color: #bcbdd0;
  text-align: center;

  @media screen and (max-width: 1200px) {
    font-size: 3.5rem;
  }

  @media screen and (max-width: 900px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 550px) {
    font-size: 2rem;
  }
`;

const SectionTitle: FC = ({ children }) => (
  <SectionTitleContainer>{children}</SectionTitleContainer>
);

export default SectionTitle;