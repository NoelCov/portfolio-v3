import { NextPage } from "next";
import React, { FC, ReactNode } from "react";

interface layoutProps {
    children?: ReactNode;
}

const LayoutComponent = ({ children }: layoutProps): JSX.Element => (
    <div className="w-full py-12 px-6 md:px-20 md:py-16 lg:px-32 lg:py-24 xl:px-96 xl:py-44 bg-backgroundColor flex flex-col items-center">
        {children}
    </div>
);

export default LayoutComponent;
