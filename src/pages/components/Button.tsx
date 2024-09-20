import React from "react";

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="px-4 py-1 bg-black text-white rounded-lg ml-2 border-2 border-black tracking-tight hover:bg-white hover:text-black active:translate-y-0.5 duration-300">
      {text}
    </button>
  );
};

export default Button;
