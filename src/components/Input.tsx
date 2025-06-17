import React from "react";

interface InputProps {
  placeholder: string;
  type?: "text" | "date";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
  onClick?: () => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = "text",
  value,
  onChange,
  readOnly = false,
  onClick,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
      onClick={onClick}
      className="w-full h-14 rounded-xl border border-[#cedce8] bg-slate-50 dark:bg-dark-four text-[#0d151c] dark:text-white placeholder:text-[#49749c] px-4 focus:outline-none focus:border-primary transition cursor-pointer"
    />
  );
};

export default Input;
