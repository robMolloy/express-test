import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";

const FAQBanner = () => {
  return (
    <SectionLightBg>
      <Container>
        <br />
        <h2>Frequently Asked Questions</h2>
        <br />
        <h3>Want to know more?</h3>
        <p>
          <a href="./">Click here</a> for an extensive list of FAQs, or get in
          touch.
        </p>
        <br />
        <br />
      </Container>
    </SectionLightBg>
  );
};

export default FAQBanner;
