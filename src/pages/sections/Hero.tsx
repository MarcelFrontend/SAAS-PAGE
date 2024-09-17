import Arrow from "@/assets/arrow-right.svg";

const Hero = () => {
  return (
    <section className="mx-auto container my-20">
      <div className="flex flex-col gap-4 text-black">
        <span className="tracking-tight text-xs">Version 2.0 is here</span>
        <h1 className="text-5xl">
          Pathway to <span>productivity</span>
        </h1>
        <p>
          Celebrate the joy of accomplishment with an app design to track your
          progress, motivate your efforts and clebrate your successes.
        </p>
        <div>
          <button>Get for free</button>
          <button className="flex items-center gap-1.5">
            Learn more
            <Arrow className="h-4 w-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
