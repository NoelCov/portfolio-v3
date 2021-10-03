import React, { FC } from "react";

import styled from "styled-components";

const SectionTitleContainer = styled.h1`
  font-size: 3rem;
  font-family: Manrope;
  margin: 0;
  color: white;
  text-align: center;
`;

const SectionTitle: FC = ({ children }) => (
  <SectionTitleContainer>{children}</SectionTitleContainer>
);

export default SectionTitle;