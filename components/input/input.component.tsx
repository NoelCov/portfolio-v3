import React from "react";

interface inputProps {
    htmlFor: string;
    labelValue: string;
    type: string;
    required: boolean;
}

export const Input = ({
    htmlFor,
    labelValue,
    type,
    required,
}: inputProps): JSX.Element => {
    return (
        <label htmlFor={htmlFor} className="block">
            <span className="text-black text-sm block">{labelValue} *</span>
            <input
                required={!required ? false : required}
                id={htmlFor}
                name={htmlFor}
                type={type}
                className="border mt-2 rounded w-full text-gray border-midGray px-2 outline-primaryColor outline-1"
            ></input>
        </label>
    );
};

export const TextArea = ({ htmlFor, labelValue }: inputProps): JSX.Element => {
    return (
        <label htmlFor={htmlFor} className="block">
            <span className="text-black text-sm block">{labelValue} *</span>
            <textarea
                required={true}
                className="border mt-2 rounded w-full text-gray border-midGray px-2 outline-primaryColor outline-1"
                rows={5}
            ></textarea>
        </label>
    );
};
