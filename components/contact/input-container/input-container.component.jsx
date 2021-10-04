import React from "react";

import {
  LabelInputContainer,
  FormInput,
  TextAreaContainer,
} from "./input-container.styles";

const InputComponent = ({ id, type, text }) => (
  <LabelInputContainer>
    <label htmlFor={id}>{text}</label>
    <FormInput id={id} name={id} type={type} required />
  </LabelInputContainer>
);

export const TextAreaComponent = ({ id, type, text }) => (
  <LabelInputContainer>
    <label htmlFor={id}>{text}</label>
    <TextAreaContainer id={id} name={id} type={type} required />
  </LabelInputContainer>
);

export default InputComponent;
