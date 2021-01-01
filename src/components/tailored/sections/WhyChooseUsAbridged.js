import React from "react";

import Button from "../../generic/buttons/ButtonPrimary";
import Container from "../../generic/containers/Container";
import SectionSingleImageBg from "../../generic/sections/SectionSingleImageBg";

const WhyChooseUsAbridged = () => {
  return (
    <SectionSingleImageBg bg="media/why_choose_us_bg.jpg">
      <Container>
        <h1>Why Choose Us?</h1>
        <p>
          Our first concern is for our customer’s safety and welfare. This is
          why all our tests conform to the highest safety standards and use the
          latest gold standard technology to provide you with accurate results
          and peace of mind.
        </p>
        <br />
        <div>
          <Button>Book A Test</Button>
        </div>
      </Container>
    </SectionSingleImageBg>
  );
};

export default WhyChooseUsAbridged;
