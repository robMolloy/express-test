import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import ButtonRow from "../../generic/grids/ButtonRow";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import ButtonSecondary from "../../generic/buttons/ButtonSecondary";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";

const AboutExpressTest = () => {
  return (
    <SectionLightBg>
      <Container>
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <Title>About ExpressTest</Title>
              <Text>
                Cignpost Diagnostics Limited has provided COVID-19 testing
                facilities for some of the world's leading companies and
                organisations, such as Netflix, the BBC, the Scottish
                Premiership and the PGA European Tour.
                <br />
                ExpressTest, a division of Cignpost Diagnostics Limited uses its
                established network of on-site and bricks and mortar
                laboratories across the UK to deliver fast, accurate, gold
                standard COVID-19 testing.
              </Text>
              <br />
              <ButtonRow
                array={[
                  <ButtonSecondary>About Us</ButtonSecondary>,
                  <ButtonPrimary>How It Works</ButtonPrimary>,
                ]}
              />
            </>,
            <>
              <img
                src="media/cg_homepage_topimg.png"
                alt=""
                style={{ maxWidth: "80%" }}
              />
            </>,
          ]}
        />
      </Container>
    </SectionLightBg>
  );
};

export default AboutExpressTest;
