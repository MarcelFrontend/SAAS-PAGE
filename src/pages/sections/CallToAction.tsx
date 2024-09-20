import Button from "../components/Button";
import SectionHeader from "../components/SectionHeader";
import Arrow from "@/assets/arrow-right.svg";
import star from "@/assets/star.png";
import spring from "@/assets/spring.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CallToAction() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={sectionRef}
      className="w-screen flex items-center flex-col gap-7 pt-20 md:pt-32 pb-20 md:pb-52 mt-20 overflow-hidden bg-gradient-to-b dark:from-[#0F172A] from-white to-[#D2DCFF] dark:to-[#000e41]"
    >
      <SectionHeader
        parentClasses="text-center items-center"
        main="Sign up for free today"
        mainClasses="md:text-6xl"
        p="Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts."
        pClasses="max-w-md lg:max-w-lg lg:text-lg"
      />
      <div className="relative flex gap-10 lg:text-2xl">
        <Button text={"Get for free"} />
        <button className="flex items-center gap-1.5 group active:translate-y-0.5 border-2 border-black dark:border-gray-600 px-2.5 rounded-lg transition-colors text-black dark:text-white">
          Learn more
          <Arrow className="h-4 md:h-6 w-auto group-hover:-rotate-45 transition-transform" />
        </button>
        <motion.img
          src={star.src}
          className="absolute h-96 w-auto -left-[28rem] -top-72"
          style={{ translateY }}
        />
        <motion.img
          src={spring.src}
          className="absolute h-96 w-auto -right-[28rem] -bottom-48"
          style={{ translateY }}
        />
      </div>
    </section>
  );
}
