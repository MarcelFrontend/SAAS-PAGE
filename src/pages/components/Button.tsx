import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-4 py-1 bg-black text-white dark:text-gray-200 rounded-lg ml-2 border-2 border-black dark:border-white tracking-tight hover:bg-white dark:hover:bg-gray-900 dark:hover:text-white active:translate-y-0.5 duration-300">
      {text}
    </button>
  );
};

export default Button;
