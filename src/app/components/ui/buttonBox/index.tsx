import React from "react";
type ButtonBoxProps = {
    type?: "submit" | "reset" | "button";
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
};

const ButtonBox: React.FC<ButtonBoxProps> = ({
    type,
    onClick,
    children,
    className,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex justify-center items-center rounded-sm text-center text-base h-9 font-normal text-[#000] bg-[#b1b3b4] hover:bg-[#9c9c9c] ${className}`}
            style={{}}
        >
            {children}
        </button>
    );
};

export default ButtonBox;
