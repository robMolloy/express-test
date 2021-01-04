import React from "react";

import AlertRecentChanges from "../tailored/sections/AlertRecentChanges";
import AccurateAndAffordable from "../tailored/sections/AccurateAndAffordable";
import CompetitiveAdvantages from "../tailored/sections/CompetitiveAdvantages";
import HowItWorks from "../tailored/sections/HowItWorks";
import BlogOverview from "../tailored/sections/BlogOverview";
import HomeAboutExpressTest from "../tailored/sections/HomeAboutExpressTest";

const Index = () => {
  return (
    <>
      <AlertRecentChanges />

      <AccurateAndAffordable />

      <HomeAboutExpressTest />

      <CompetitiveAdvantages />

      <HowItWorks />

      <BlogOverview />
    </>
  );
};

export default Index;