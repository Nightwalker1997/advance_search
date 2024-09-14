import React from "react";

type SelectBoxProps = {
    name: string;
    options?: string[];
    onChange?: (e: any) => void;
    className?: string;
    disabled?: boolean;
    value?: string;
};

const SelectBox: React.FC<SelectBoxProps> = ({
    name,
    options,
    onChange,
    className,
    disabled,
    value,
}) => {
    return (
        <select
            name={name}
            id={name}
            onChange={onChange}
            value={value}
            disabled={disabled}
            className={`rounded p-2 bg-white text-black my-2 px-1 border-none ${className}`}
        >
            <option value="" className="hidden">
                {name}
            </option>
            {options?.map((val, index) => (
                <option value={val} key={index}>
                    {val}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
