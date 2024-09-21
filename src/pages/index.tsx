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
        className="sticky bottom-5 left-[94%] md:left-[93%] lg:left-[95%] bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-2 py-1 md:px-3 md:py-2 text-xl md:text-3xl rounded-lg"
      >
        {currentTheme === "dark" ? <span>🌘</span> : <span>☀️</span>}
      </button>
    </>
  );
};

export default Home;
// */node_modules,*/.next
