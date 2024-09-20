import logo from "@/assets/logosaas.png";
import TiltedArrow from "@/assets/arrow-right.svg";
import Menu from "@/assets/menu.svg";
import Button from "../components/Button";

const Header = () => {
  return (
    <>
      <div id="top"></div>
      <div className="hidden bg-black md:flex justify-center gap-3 py-3 text-xs">
        <p className="text-gray-500 md:text-gray-400">
          Streamline your workflow and boost your productivity
        </p>
        <button className="flex items-center gap-1 hover:underline underline-offset-2 group">
          Get started for free
          <TiltedArrow className="h-4 w-auto group-hover:-rotate-45 transition-transform" />
        </button>
      </div>
      <header className="sticky top-0 flex items-center px-12 py-2 md:px-24 md:py-2 justify-between backdrop-blur-sm bg-white/10 z-20">
        <a href="#top">
          <img
            className="h-10 w-auto cursor-pointer active:scale-95 transition-transform hover:scale-105"
            src={logo.src}
            alt="Logo"
          />
        </a>
        <nav className="hidden md:flex items-center gap-5 text-gray-500 font-bold">
          <a
            className="hover:text-black transition-colors active:scale-95"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-black transition-colors active:scale-95"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-black transition-colors active:scale-95"
            href="#Customers"
          >
            Customers
          </a>
          <a
            className="hover:text-black transition-colors active:scale-95"
            href="#updates"
          >
            Updates
          </a>
          <a
            className="hover:text-black transition-colors active:scale-95"
            href="#help"
          >
            Help
          </a>
          <Button text={"Get for free"} />
        </nav>
        <Menu className="md:hidden h-8 w-auto text-black" />
      </header>
    </>
  );
};

export default Header;
