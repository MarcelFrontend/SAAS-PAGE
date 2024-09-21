import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialIns from "@/assets/social-insta.svg";
import SocialIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYt from "@/assets/social-youtube.svg";
import Image from "next/image";

export default function Footer() {
  const socialStyles =
    "h-8 md:h-10 lg:h-14 w-auto hover:text-blue-700 dark:hover:text-blue-400 hover:drop-shadow-[0px_0px_3px_rgba(200,200,200,.5)] transition-all duration-150 ";
  return (
    <footer
      className="relative -bottom-16 flex items-center justify-center flex-col gap-5 bg-white
     dark:bg-gray-900 pb-5 transition-colors duration-700 text-black dark:text-gray-300"
    >
      <div className="flex relative">
        <div className="absolute inset-0 top-1 blur bg-[linear-gradient(to_right,F87BFF,FB92CF,FFDD9B,C2F0B1,2FD8FE)]"></div>
        <Image
          width={10}
          height={10}
          src={logo.src}
          alt="Logo"
          className="h-10 md:h-16 w-auto z-10"
        />
      </div>
      <ul className="flex gap-4">
        <li className="">
          <a href="#footer">
            <SocialX className={socialStyles} />
          </a>
        </li>
        <li>
          <a href="#footer">
            <SocialIns className={socialStyles} />
          </a>
        </li>
        <li>
          <a href="#footer">
            <SocialIn className={socialStyles} />
          </a>
        </li>
        <li>
          <a href="#footer">
            <SocialPin className={socialStyles} />
          </a>
        </li>
        <li>
          <a href="#footer">
            <SocialYt className={socialStyles} />
          </a>
        </li>
      </ul>
      <span id="footer" className="max-w-xs md:max-w-none text-center text-xs ">
        © 2024 Your Company, Inc. All rights reserved.
      </span>
    </footer>
  );
}
