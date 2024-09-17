import logo from "@/assets/logosaas.png";
import TiltedArrow from "@/assets/arrow-right.svg";
import Menu from "@/assets/menu.svg";

const Header = () => {
  return (
    <>
      <div className="hidden bg-black md:flex justify-center gap-3 py-3 text-xs">
        <p className="text-gray-500 md:text-gray-400">
          Streamline your workflow and boost your productivity
        </p>
        <button className="flex items-center gap-1 hover:underline underline-offset-2 group">
          Get started for free
          <TiltedArrow className="h-4 w-auto group-hover:-rotate-45 transition-transform" />
        </button>
      </div>
      <header className="sticky top-0 flex items-center px-12 py-2 md:px-24 md:py-5 justify-between backdrop-blur bg-white/10">
        <img className="h-10 w-auto" src={logo.src} alt="Logo" />
        <nav className="hidden md:flex items-center gap-5 text-gray-500">
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
          <button className="px-4 py-1 bg-black text-white rounded-lg ml-2 border-2 border-black tracking-tight hover:bg-white hover:text-black active:translate-y-0.5 duration-300">
            Get for free
          </button>
        </nav>
        <Menu className="md:hidden h-8 w-auto text-black"/>
      </header>
    </>
  );
};

export default Header;
