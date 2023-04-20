import React, { ReactNode } from "react";

interface layoutProps {
    children?: ReactNode;
}

const LayoutComponent = ({ children }: layoutProps): JSX.Element => (
    <div className="py-16 px-8 md:px-20 md:py-16 lg:px-24 lg:py-24 xl:px-40 xl:py-44 bg-backgroundColor flex flex-col xl:items-center">
        {children}
    </div>
);

export default LayoutComponent;
