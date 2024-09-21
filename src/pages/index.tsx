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
        className="sticky bottom-5 left-[82%] sm:left-[90%] md:left-[93%] lg:left-[95%] bg-yellow-500/50 dark:bg-blue-700 transition-all duration-100 px-2 dark:px-3
        py-2 md:px-3 md:py-2 text-2xl md:text-3xl rounded-lg"
      >
        {currentTheme === "dark" ? (
          <Moon className="h-12 lg:h-14 w-auto" />
        ) : (
          <Sun className="h-12 lg:h-14 w-auto" />
        )}
      </button>
    </>
  );
};

export default Home;
// */node_modules,*/.next
