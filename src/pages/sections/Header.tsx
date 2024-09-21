import logo from "@/assets/logosaas.png";
import TiltedArrow from "@/assets/arrow-right.svg";
import Menu from "@/assets/menu.svg";
import Button from "../components/Button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const linkClasses =
    "md:hover:text-black md:dark:hover:text-white hover:text-gray-950 transition-colors active:scale-95 transition-colors duration-700";
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div id="top"></div>
      <div className="hidden bg-black dark:bg-[#112A85] md:flex justify-center gap-3 py-3 text-xs lg:text-2xl z-10 transition-colors duration-700">
        <p className="text-gray-500 md:text-gray-400">
          Streamline your workflow and boost your productivity
        </p>
        <button className="flex items-center gap-1 hover:underline underline-offset-2 group">
          Get started for free
          <TiltedArrow className="h-4 w-auto group-hover:-rotate-45 transition-transform" />
        </button>
      </div>
      <header className="sticky -top-0.5 flex items-center px-12 py-2 md:px-24 md:py-2 justify-between backdrop-blur-sm bg-white/10 dark:bg-[rgba(17,42,133,0.7)] transition-colors duration-700 z-20">
        <a href="#top">
          <Image
            width={10}
            height={10}
            className="h-10 lg:h-14 w-auto cursor-pointer active:scale-95 transition-transform hover:scale-105"
            src={logo.src}
            alt="Logo"
            loading="lazy"
          />
        </a>
        <nav
          className={`${
            showMenu
              ? "flex flex-col absolute right-14 top-16 bg-white dark:bg-blue-950 shadow-md border-2 border-black px-2 py-3 rounded-xl transition-all"
              : "hidden"
          } md:flex items-center gap-5 text-gray-500 dark:text-gray-400 transition-colors duration-700 font-bold lg:text-2xl `}
        >
          <a className={linkClasses} href="#productShowcase">
            Features
          </a>
          <a className={linkClasses} href="#pricing">
            Pricing
          </a>
          <a className={linkClasses} href="#testimonials">
            Customers
          </a>
          <Button text={"Get for free"} />
        </nav>
        <Menu
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden h-8 w-auto text-black"
        />
      </header>
    </>
  );
}
