import SectionHeader from "../components/SectionHeader";
import Check from "@/assets/check.svg";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="container my-10" id="pricing">
      <SectionHeader
        parentClasses="items-center text-center"
        main="Pricing"
        mainClasses="text-6xl md:text-7xl"
        p="Free forever. Upgrade for unlimited tasks, better security and exclusive features."
        pClasses="max-w-sm md:max-w-md"
      />
      <ul className="flex items-center md:items-end justify-center flex-col md:flex-row gap-11 mt-10">
        {pricingTiers.map((tier) => (
          <li
            key={tier.title}
            className={`flex flex-col gap-4 px-9 py-10 rounded-3xl shadow-2xl md:max-w-72 hover:-translate-y-5 transition-all hover:shadow-[0px_0px_10px_gray] duration-300  ${
              tier.inverse
                ? "bg-black text-gray-100 dark:text-white"
                : "bg-white dark:bg-slate-800 dark:text-white text-gray-900"
            }`}
          >
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-white font-bold">
              <span>{tier.title}</span>
              {tier.popular && (
                <motion.span
                  animate={{
                    backgroundPositionX: "100%",
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                  }}
                  className="tracking-wider border border-gray-800 px-3 py-2 rounded-lg
                   bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)]
                    [background-size:200%] text-transparent bg-clip-text font-medium"
                >
                  Popular
                </motion.span>
              )}
            </div>
            <span
              className={`text-lg my-2 ${
                tier.inverse ? "text-white" : "text-black dark:text-gray-400"
              }`}
            >
              <span className="text-4xl font-black">${tier.monthlyPrice}</span>
              <span className="text-xs tracking-wider font-bold">/month</span>
            </span>
            <button
              className={`py-2 rounded-xl font-sans hover:scale-105 active:scale-[98%] transition-transform ${
                tier.inverse
                  ? "bg-white dark:bg-slate-800 text-black dark:text-white font-black"
                  : "bg-black text-white font-medium "
              }`}
            >
              {tier.buttonText}
            </button>
            <ul>
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 my-3 leading-5 font-sans text-lg"
                >
                  <Check className="h-7 w-auto" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
