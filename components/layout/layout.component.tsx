import React, { ReactNode } from "react";

interface layoutProps {
    children?: ReactNode;
}

const LayoutComponent = ({ children }: layoutProps): JSX.Element => (
    <div
        id="layout"
        className="px-8 md:px-20 lg:px-24 xl:px-40 2xl:max-w-screen-xl 2xl:px-0 2xl:mx-auto"
    >
        {children}
    </div>
);

export default LayoutComponent;
