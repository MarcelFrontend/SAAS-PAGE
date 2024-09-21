import SectionHeader from "../components/SectionHeader";
import product from "@/assets/product-image.png";
import { motion, useScroll, useTransform } from "framer-motion";
import noodle from "@/assets/tube.png";
import pyramid from "@/assets/pyramid.png";
import { useRef } from "react";

export default function ProductShowcase() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      id="productShowcase"
      ref={sectionRef}
      className="w-screen bg-gradient-to-b dark:from-gray-900 from-[#fff] to-[#D2DCFF] dark:to-[#000e41] overflow-hidden transition-colors duration-700"
    >
      <div className="container flex items-center justify-center flex-col gap-7 my-10">
        <SectionHeader
          parentClasses="text-center items-center gap-1 md:gap-4"
          small="Boost your productivity"
          main="A more effective way to track progress"
          mainClasses="max-w-sm md:max-w-xl lg:max-w-3xl text-[32px] md:text-6xl lg:text-7xl"
          p="Effortlessly turn your ideas into a fully functional, responsive, SaaS website in just minutes with this template."
          pClasses="max-w-sm lg:max-w-lg"
        />
        <div className="relative text-black">
          <img
            src={product.src}
            alt="Image of our product"
            className="w-auto h-60 md:h-[35rem] lg:h-[45rem]"
            loading="lazy"
          />
          <motion.img
            src={pyramid.src}
            className="absolute hidden md:block w-auto h-72 lg:h-96 top-20 -right-48 lg:-right-60"
            style={{ translateY }}
          />
          <motion.img
            src={noodle.src}
            className="absolute hidden md:block w-auto h-72 lg:h-96 -left-44 lg:-left-52 bottom-0"
            style={{ translateY }}
          />
        </div>
      </div>
    </section>
  );
}
