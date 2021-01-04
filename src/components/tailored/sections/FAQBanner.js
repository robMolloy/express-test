import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

const FAQBanner = () => {
  return (
    <SectionLightBg>
      <Container>
        <br />
        <Title size="1">Frequently Asked Questions</Title>
        <br />
        <Title size="2">Want to know more?</Title>
        <Text align="center">
          <a href="./">Click here</a> for an extensive list of FAQs, or get in
          touch.
        </Text>
        <br />
        <br />
      </Container>
    </SectionLightBg>
  );
};

export default FAQBanner;
