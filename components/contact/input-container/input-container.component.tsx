import React from "react";

import {
    LabelInputContainer,
    FormInput,
    TextAreaContainer,
} from "./input-container.styles";

interface InputProps {
    id: string;
    type: React.HTMLInputTypeAttribute;
    text: string;
    componentType: formOptions;
}

export enum formOptions {
    "formInput",
    "textArea",
}

const InputComponent = ({
    id,
    text,
    type,
    componentType,
}: InputProps): JSX.Element => {
    return (
        <LabelInputContainer>
            <label htmlFor={id}>
                {text}
                <span style={{ color: "#B18C19" }}>{"  *"}</span>
            </label>
            {componentType === formOptions.formInput ? (
                <FormInput id={id} name={id} type={type} required />
            ) : (
                <TextAreaContainer id={id} name={id} required />
            )}
        </LabelInputContainer>
    );
};

export default InputComponent;
