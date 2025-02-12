import React from "react";

interface ButtonProps {
  label: string;
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  loading?: boolean;
}

const Button = ({
  label,
  type = "button",
  onClick,
  className,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={`flex items-center p-2 rounded-lg font-bold transition whitespace-nowrap border-none hover:text-[#FFBB00] ${className}`}
    >
      {loading ? "" : label}
    </button>
  );
};

export default Button;
