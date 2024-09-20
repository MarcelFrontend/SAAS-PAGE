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
    <div className="container my-10 overflow-x-hidden">
      <div className="flex flex-1 [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <motion.div
          initial={{ translateX: "0%" }}
          animate={{ translateX: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          className="flex flex-none gap-6 pr-6 md:gap-14 md:pr-14 -translate-x-1/2"
        >
          {[...logos, ...logos].map((logo,index) => (
            <img key={logo.src+index} src={logo.src} className="h-6 md:h-9 w-auto" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
