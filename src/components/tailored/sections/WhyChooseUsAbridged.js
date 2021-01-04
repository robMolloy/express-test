import React from "react";

import Button from "../../generic/buttons/ButtonPrimary";
import Container from "../../generic/containers/Container";
import SectionSingleImageBg from "../../generic/sections/SectionSingleImageBg";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import FlexibleGrid from "../../generic/grids/FlexibleGrid";

const WhyChooseUsAbridged = () => {
  return (
    <SectionSingleImageBg bg="media/why_choose_us_bg.jpg">
      <Container>
        <Title size="0" align="center">
          Why Choose Us?
        </Title>
        <Text align="center">
          Our first concern is for our customer’s safety and welfare. This is
          why all our tests conform to the highest safety standards and use the
          latest gold standard technology to provide you with accurate results
          and peace of mind.
        </Text>
        <br />

        <FlexibleGrid justify="center" array={[<Button>Book A Test</Button>]} />
      </Container>
    </SectionSingleImageBg>
  );
};

export default WhyChooseUsAbridged;
