"use client";
import React from "react";
import Head from "next/head";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import LogoTicker from "./sections/LogoTicker";
import ProductShowcase from "./sections/ProductShowcase";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import CallToAction from "./sections/CallToAction";
import Footer from "./sections/Footer";
import Sun from "@/assets/sun-regular.svg";
import Moon from "@/assets/moon-regular.svg";
import { useTheme } from "next-themes";

const Home = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      <Head>
        <title>Business Saas page</title>
      </Head>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
      <button
        onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
        className="sticky bottom-5 left-[84%] sm:left-[90%] md:left-[93%] lg:left-[95%] bg-gray-300 dark:bg-blue-400 transition-colors duration-100 text-2xl md:text-3xl rounded-lg px-3 
        dark:px-[7px] md:px-[11px] dark:md:px-[7.5px] lg:px-[12px] py-2"
      >
        {currentTheme === "dark" ? (
          <Sun className="h-7 md:h-9 lg:h-12 w-auto" />
        ) : (
          <Moon className="h-7 md:h-9 lg:h-12 w-auto" />
        )}
      </button>
    </>
  );
};

export default Home;
// */node_modules,*/.next
