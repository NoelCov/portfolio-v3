import React, { FC } from "react";

import { ButtonContainer } from "./button.styles";

const ButtonComponent: FC = ({ children }) => (
  <ButtonContainer>{children}</ButtonContainer>
);

export default ButtonComponent;
