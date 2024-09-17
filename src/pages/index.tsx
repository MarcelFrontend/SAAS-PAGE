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

const Home = () => {
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
    </>
  );
};

export default Home;
