import React, { ReactNode } from "react";

interface layoutProps {
    children?: ReactNode;
}

const LayoutComponent = ({ children }: layoutProps): JSX.Element => (
    <div className="px-8 md:px-20 lg:px-24 xl:px-40 flex flex-col xl:items-center">
        {children}
    </div>
);

export default LayoutComponent;
