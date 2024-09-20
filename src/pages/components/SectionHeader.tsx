import React from "react";

interface headerProps {
  parentClasses?: string;
  small?: string;
  main: string;
  mainClasses: string;
  p: string;
  pClasses?: string;
}

export default function SectionHeader({
  parentClasses,
  small,
  main,
  p,
  pClasses,
  mainClasses,
}: headerProps) {
  return (
    <div className={`flex flex-col text-black ${parentClasses}`}>
      {small && (
        <span className="tracking-tight text-xs border border-gray-300 px-2.5 py-1.5 rounded-md">
          {small}
        </span>
      )}
      <span
        className={`text-5xl tracking-tight font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text ${mainClasses} pb-1 md:pb-2`}
      >
        {main}
      </span>
      <p className={` text-xs leading-5 ${pClasses}`}>{p}</p>
    </div>
  );
}
