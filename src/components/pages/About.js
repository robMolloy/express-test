import React from "react";
import Header from "../generic/layouts/Header";
import AboutIntro from "../tailored/sections/AboutIntro";
import WhyChooseUs from "../tailored/sections/WhyChooseUs";
import Founders from "../tailored/sections/Founders";

const About = () => {
  return (
    <>
      <Header>About</Header>
      <AboutIntro />
      <WhyChooseUs />
      <Founders />
    </>
  );
};

export default About;
