import React from "react";

import { ButtonContainer } from "./button.styles";

export interface ButtonProps {
    text?: string;
    bgColor?: string;
}

export enum colors {
    yellow = "#B18C19",
    lightBlue = "#2A2D42",
    darkBlue = "#1D1F2D",
}

const ButtonComponent = ({ text, bgColor = colors.yellow }: ButtonProps) => (
    <ButtonContainer bgColor={bgColor}>{text}</ButtonContainer>
);

export default ButtonComponent;
