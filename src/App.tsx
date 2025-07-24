import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery";
import WhatWeOffer from "./components/WhatWeOffer";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingSection from "./components/BookingSection";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faqs";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";

const App: React.FC = () => {
  return (
    <>
      <Contact />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <Gallery />
      <WhatWeOffer />
      <SectionDivider />
      <Services />
      <WhyChooseUs/>
      <SectionDivider />
      <BookingSection/>
      <SectionDivider />
      <Blogs />
      <Testimonials />
      <SectionDivider />
      <Faq />
      <Footer />
    </>
  );
};

export default App;
