import React, { FC } from "react";

import { LayoutContainer } from "./layout.styles";

const LayoutComponent: FC = ({ children }) => (
  <LayoutContainer>{children}</LayoutContainer>
);

export default LayoutComponent;
