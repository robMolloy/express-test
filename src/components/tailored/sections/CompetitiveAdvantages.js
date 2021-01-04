import React from "react";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Container from "../../generic/containers/Container";
import InnerContainer from "../../generic/containers/InnerContainer";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Tablet from "../../generic/layouts/Tablet";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const CompetitiveAdvantages = () => {
  return (
    <SectionLightBg>
      <Container>
        <GridColumnToRow
          array={[
            <Tablet imgSrc="media/cg_homepage_3boxes_1.jpg">
              <Title size="1">Fast and Affordable</Title>
              <Text align="center">
                By leveraging our established network of regional laboratories,
                it means we can get your results back to you quicker. We aim to
                deliver your results by 10pm the day after your test, however,
                results could take up to 48 hours to receive.
              </Text>
            </Tablet>,
            <Tablet imgSrc="media/cg_homepage_3boxes_2.jpg">
              <Title size="1">PPE and Safety</Title>
              <Text align="center">
                At our screening facilities, your swab will be taken by one of
                our clinically trained sample takers. Our sample takers are all
                fully trained in both administering and storing swab samples,
                and wear full PPE when on site.
              </Text>
            </Tablet>,
            <Tablet imgSrc="media/cg_homepage_3boxes_3.jpg">
              <Title size="1">Trusted Testing</Title>
              <Text align="center">
                We use PCR testing machines, the gold standard for COVID-19
                screening. All our devices are CE-IVD approved, so conform to
                the highest regulatory standards.
              </Text>
            </Tablet>,
          ]}
        />
        <br />
        <br />
        <InnerContainer>
          <Text align="center">
            <i>
              “The Cignpost Diagnostics COVID-19 screening service has allowed
              the BBC's 'The Pursuit of Love' to return to work quickly and
              safely and to get us back to doing what we do best - producing
              great television. The mobile laboratory is extremely professional,
              staffed by a team of technicians who efficiently turn our tests
              around quickly with results back with us within a few short hours.
              I’ve been especially impressed at the flexibility shown by the
              Cignpost Diagnostics team who have reacted quickly to changes in
              the testing numbers as our schedule has evolved throughout the
              shoot.”
            </i>
            <br />
            <br />— Ian Hogan, Producer BBC
          </Text>
        </InnerContainer>
      </Container>
    </SectionLightBg>
  );
};

export default CompetitiveAdvantages;
