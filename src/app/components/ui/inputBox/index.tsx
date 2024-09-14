import React from "react";

type InputBoxProps = {
    id: string;
    type?: string;
    name?: string;
    className?: string;
    placeHolder?: string;
    value?: string;
    onChange?: (e: any) => void;
};

const InputBox: React.FC<InputBoxProps> = ({
    id,
    type,
    name,
    className,
    placeHolder,
    value,
    onChange,
}) => {
    return (
        <input
            id={id}
            type={type}
            name={name}
            placeholder={placeHolder}
            value={value}
            onChange={onChange}
            className={`border border-[#b7b7b7] rounded-none h-9 font-normal font-sans text-sm ${className}`}
        />
    );
};

export default InputBox;
