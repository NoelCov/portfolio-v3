import React from "react";

import {
  LabelInputContainer,
  FormInput,
  TextAreaContainer,
} from "./input-container.styles";

const InputComponent = ({ id, type, text }) => (
  <LabelInputContainer>
    <label htmlFor={id}>{text}<span style={{color: "orange"}}>{"  *"}</span></label>
    <FormInput id={id} name={id} type={type} required />
  </LabelInputContainer>
);

export const TextAreaComponent = ({ id, type, text }) => (
  <LabelInputContainer>
    <label htmlFor={id}>{text}<span style={{color: "orange"}}>{"  *"}</span></label>
    <TextAreaContainer id={id} name={id} type={type} required />
  </LabelInputContainer>
);

export default InputComponent;
