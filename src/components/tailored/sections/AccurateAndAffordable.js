import React from "react";

import GridColumnToRow from "../../generic/grids/GridColumnToRow";

import Container from "../../generic/containers/Container";
import SectionDarkBg from "../../generic/sections/SectionDarkBg";
import ButtonRow from "../../generic/grids/ButtonRow";

import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import ButtonSecondary from "../../generic/buttons/ButtonSecondary";

const AccurateAndAffordable = () => {
  return (
    <SectionDarkBg>
      <Container>
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <Title size="0">
                Accurate and Affordable
                <br />
                COVID-19 Testing in the UK
              </Title>

              <Text>
                ExpressTest is a COVID-19 testing service providing fast,
                accurate and reliable PCR screening across the UK. It is a
                programme that is run by the direct to consumer division of
                Cignpost Diagnostics Limited.
                <br />
                <br />
                We offer accurate and affordable, gold standard PCR testing for
                only £99 per person, with subsidised concessions for airport
                passengers and staff. We aim to deliver your results by 10pm the
                day after your test, however,{" "}
                <b>results could take up to 48 hours to receive.</b>
                <br />
                <br />
                UK Testing Facilities | Testing for only £99
                <br />
                <br />
              </Text>
              <ButtonRow
                array={[
                  <ButtonSecondary>Book a Test Now</ButtonSecondary>,
                  <ButtonPrimary>How it Works</ButtonPrimary>,
                ]}
              />
              <Text>
                <br />
                We have sites across the UK, with more to open soon.
              </Text>
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
    </SectionDarkBg>
  );
};

export default AccurateAndAffordable;
