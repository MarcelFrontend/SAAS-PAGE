import AcmeLogo from "@/assets/logo-acme.png";
import ApexLogo from "@/assets/logo-apex.png";
import CeleLogo from "@/assets/logo-celestial.png";
import EchoLogo from "@/assets/logo-echo.png";
import PulseLogo from "@/assets/logo-pulse.png";
import QuantLogo from "@/assets/logo-quantum.png";

import { motion } from "framer-motion";

export default function LogoTicker() {
  const logos = [AcmeLogo, ApexLogo, CeleLogo, EchoLogo, PulseLogo, QuantLogo];
  return (
    <div className="container py-24 lg:-mt-12 overflow-x-hidden">
      <div className="flex flex-1 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          initial={{ translateX: "0%" }}
          animate={{ translateX: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex flex-none gap-6 pr-6 md:gap-14 md:pr-14 dark:md:gap-16 dark:md:pr-16 -translate-x-1/2 dark:bg-gray-400 dark:py-4 transition-colors duration-700"
        >
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={logo.src + index}
              src={logo.src}
              className="h-6 dark:h-7 md:h-9 dark:md:h-10 w-auto transition-all duration-700"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
