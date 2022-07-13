import React from "react";

import { ButtonContainer } from "./button.styles";

interface ButtonProps {
    text: string;
}

const ButtonComponent = ({ text }: ButtonProps): JSX.Element => (
    <ButtonContainer>{text}</ButtonContainer>
);

export default ButtonComponent;
