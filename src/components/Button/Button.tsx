import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
