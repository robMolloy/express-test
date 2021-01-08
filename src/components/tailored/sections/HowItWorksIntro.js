import React from "react";

// import ButtonPrimary from "../../generic/buttons/ButtonPrimary";

// import GridColumnToRow from "../../generic/grids/GridColumnToRow";
// import Text from "../../generic/text/Text";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const HowItWorksIntro = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title size="1">How It Works</Title>
        <Text align="center">
          ExpressTest offers two COVID-19 testing solutions. Either, travel to
          one of our screening centres, or have the test sent to your home and
          administer it yourself. Choose the type of test you’d like below.
        </Text>
      </Container>
    </SectionLightBg>
  );
};

export default HowItWorksIntro;
