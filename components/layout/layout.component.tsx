import { NextPage } from "next";
import React, { FC, ReactNode } from "react";

import { LayoutContainer } from "./layout.styles";

interface layoutProps {
    children?: ReactNode;
}

const LayoutComponent = ({ children }: layoutProps): JSX.Element => (
    <LayoutContainer>{children}</LayoutContainer>
);

export default LayoutComponent;
