import React from "react";

interface headerProps {
  parentClasses?: string;
  small?: string;
  smallClasses?: string;
  main: string;
  mainClasses: string;
  p: string;
  pClasses?: string;
}

export default function SectionHeader({
  parentClasses,
  small,
  smallClasses,
  main,
  p,
  pClasses,
  mainClasses,
}: headerProps) {
  return (
    <div
      className={`flex flex-col text-black dark:text-gray-400 dark:md:text-gray-300 ${parentClasses}`}
    >
      {small && (
        <span
          className={`tracking-tight text-xs border border-gray-300 px-2.5 py-1.5 mb-4 rounded-md ${smallClasses}`}
        >
          {small}
        </span>
      )}
      <span
        className={`text-5xl tracking-tight font-bold bg-gradient-to-b dark:from-white from-black dark:to-[#3d5cc1] to-[#001E80] text-transparent bg-clip-text pb-1 md:pb-2 ${mainClasses}`}
      >
        {main}
      </span>
      <p className={` text-sm leading-5 max-w-xs ${pClasses}`}>{p}</p>
    </div>
  );
}
