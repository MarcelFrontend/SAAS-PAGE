import Button from "../components/Button";
import Arrow from "@/assets/arrow-right.svg";
import heroNoodle from "@/assets/noodle.png";
import heroImg from "@/assets/cog.png";
import heroTube from "@/assets/cylinder.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "../components/SectionHeader";

export default function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="relative lg:-top-12 overflow-x-hidden mb-14">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] -z-10 pointer-events-none"></div>
      <div className="container md:flex items-center">
        <div className="flex items-center md:items-start md:text-start md:justify-center flex-col gap-4 lg:gap-6 text-black">
          <SectionHeader
            parentClasses="md:items-start md:text-start md:justify-center gap-4 lg:gap-6"
            small="Version 2.0 is here"
            main="Pathway to productivity"
            mainClasses="max-w-xs md:max-w-md lg:max-w-3xl sm:text-5xl md:text-7xl lg:text-9xl"
            p="Celebrate the joy of accomplishment with an app design to track your
        progress, motivate your efforts and clebrate your successes."
            pClasses="max-w-[18rem] md:max-w-[26rem] lg:max-w-lg lg:text-2xl"
          />
          <div className="flex gap-10 lg:text-2xl">
            <Button text={"Get for free"} />
            <button className="flex items-center gap-1.5 group active:translate-y-0.5 transition-transform border-2 border-black px-2.5 rounded-lg hover:text-white transition-colors">
              Learn more
              <Arrow className="h-4 md:h-6 w-auto group-hover:-rotate-45 transition-transform" />
            </button>
          </div>
        </div>
        <div className="relative flex justify-center md:block">
          <motion.img
            width={280}
            height={280}
            alt=""
            src={heroTube.src}
            className="hidden md:block absolute w-[180px] lg:w-[210px] h-[180px] lg:h-[210px] md:-top-32 lg:-top-10 -z-10"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={heroImg.src}
            className="relative w-52 h-52 md:translate-x-0 -top-10 md:-top-4 md:max-w-9xl md:h-full md:w-auto lg:max-w-3xl lg:max-h-xl md:-right-44 -z-10 pointer-events-none"
            initial={{ translateY: 0 }}
            animate={{ translateY: "20px" }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              duration: 4,
            }}
          />
          <motion.img
            alt=""
            width={280}
            height={280}
            src={heroNoodle.src}
            className="hidden lg:block absolute bottom-0 size-96 -left-40 rotate-90"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
}
