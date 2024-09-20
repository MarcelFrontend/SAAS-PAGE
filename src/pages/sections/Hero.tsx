import Button from "../components/Button";
import Arrow from "@/assets/arrow-right.svg";
import heroNoodle from "@/assets/noodle.png";
import heroImg from "@/assets/cog.png";
import heroTube from "@/assets/cylinder.png";
// #001E80
// #183EC2, #EAEEFE
const Hero = () => {
  return (
    <section className="md:mt-10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] -z-10 pointer-events-none"></div>
      <div className="container md:flex items-center">
        <div className="flex items-center text-center md:items-start md:text-start md:justify-center flex-col gap-4 lg:gap-6 text-black">
          <span className="tracking-tight text-xs border border-gray-300 px-2.5 py-1.5 rounded-md">
            Version 2.0 is here
          </span>
          <h1 className="max-w-xs md:max-w-md lg:max-w-3xl sm:text-5xl md:text-7xl lg:text-9xl tracking-tight font-bold bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text lg:pb-2">
            Pathway to productivity
          </h1>
          <p className="max-w-[18rem] md:max-w-[26rem] text-xs leading-5 lg:max-w-lg lg:text-2xl">
            Celebrate the joy of accomplishment with an app design to track your
            progress, motivate your efforts and clebrate your successes.
          </p>
          <div className="flex gap-10 lg:text-2xl">
            <Button text={"Get for free"} />
            <button className="flex items-center gap-1.5 group active:translate-y-0.5 transition-transform border border-black px-2.5 rounded-lg hover:text-white transition-colors">
              Learn more
              <Arrow className="h-4 md:h-6 w-auto group-hover:-rotate-45 transition-transform" />
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={heroTube.src}
            className="hidden md:block absolute w-[180px] lg:w-[210px] h-[180px] lg:h-[210px] md:-top-20 lg:-top-10"
          />
          <img
            src={heroImg.src}
            className="relative w-52 h-52 translate-x-1/2 md:translate-x-0 -top-10 md:top-0 md:max-w-9xl md:h-full md:w-auto lg:max-w-3xl lg:max-h-xl md:-right-44 -z-10 pointer-events-none"
          />
          <img
            src={heroNoodle.src}
            className="hidden lg:block absolute bottom-0 size-96 -left-40 rotate-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

/*

*/
