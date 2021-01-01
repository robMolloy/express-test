import React from "react";
import Header from "../generic/layouts/Header";
import HowItWorksIntro from "../tailored/sections/HowItWorksIntro";
import HowItWorksSection from "../tailored/sections/HowItWorks";
import ProductPicker from "../tailored/sections/ProductPicker";
import BookYourTest from "../tailored/sections/BookYourTest";
import FAQBanner from "../tailored/sections/FAQBanner";

const HowItWorks = () => {
  return (
    <>
      <Header>How It Works</Header>
      <HowItWorksIntro />
      <ProductPicker />

      <HowItWorksSection dark={false} intro={false} />
      <BookYourTest />
      <FAQBanner />
    </>
  );
};

export default HowItWorks;
