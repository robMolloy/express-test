import React from "react";

import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import ButtonSecondary from "../../generic/buttons/ButtonSecondary";

import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";
import ButtonRow from "../../generic/grids/ButtonRow";

const AboutIntro = () => {
  return (
    <SectionLightBg>
      <Container>
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <Title size="0">
                ExpressTest provides fast, accurate and reliable COVID-19
                testing solutions across the UK.
              </Title>
              <Text>
                ExpressTest is a programme that is run by the direct to consumer
                division of Cignpost Diagnostics Limited.
                <br />
                <br />
                Cignpost Diagnostics Limited deliver world-class client
                solutions in response to the COVID-19 pandemic, providing
                COVID-19 testing to media and corporate clients, such as
                Netflix, the BBC, Amazon and the PGA European Tour.
              </Text>
              <br />
              <ButtonRow
                array={[
                  <ButtonSecondary>About Cignpost Diagnostics</ButtonSecondary>,
                  <ButtonPrimary>How it Works</ButtonPrimary>,
                ]}
              />
              <br />
            </>,
            <>
              <img src="media/new_about_image.jpg" alt="" />
            </>,
          ]}
        />
      </Container>
    </SectionLightBg>
  );
};

export default AboutIntro;
