import React from "react";

interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`mt-auto w-full py-2 rounded-full bg-button dark:bg-dark.third dark:text-black font-bold hover:bg-secondary hover:scale-105 transition ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
