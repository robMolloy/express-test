import React from "react";
// import { useTheme } from "@material-ui/styles";
import FaqIntro from "../tailored/sections/FaqIntro";
import FaqsAboutExpressTest from "../tailored/sections/FaqsAboutExpressTest";
import FaqsBookingYourTest from "../tailored/sections/FaqsBookingYourTest";
import FaqsTestDayAndYourResults from "../tailored/sections/FaqsTestDayAndYourResults";
import FaqsOtherQuestions from "../tailored/sections/FaqsOtherQuestions";

const Faqs = () => {
  return (
    <>
      <FaqIntro />
      <FaqsAboutExpressTest />
      <FaqsBookingYourTest />
      <FaqsTestDayAndYourResults />
      <FaqsOtherQuestions />
    </>
  );
};

export default Faqs;
