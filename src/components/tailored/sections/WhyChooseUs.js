import React from "react";

import Container from "../../generic/containers/Container";
import SectionDarkBg from "../../generic/sections/SectionDarkBg";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";

import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const WhyChooseUsAbridged = () => {
  return (
    <SectionDarkBg>
      <Container>
        <Title size="0">Why Choose Us?</Title>
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <img src="media/cg_about_step1.png" alt="" />
            </>,
            <>
              <Title size="0">Fast and Affordable</Title>
              <Text>
                By leveraging our established network of regional laboratories,
                it means we can get your results back to you quicker. We will
                aim to provide you with results the following day – for the
                competitive price of £99 per test.
              </Text>
            </>,
          ]}
        />
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <Title size="0">PPE and Safety</Title>
              <Text>
                At our testing facilities, your swab will be taken by one of
                clinically trained sample takers. Our sample takers are all
                fully trained in both administering and storing swab samples,
                and wear full PPE when on site.
              </Text>
            </>,
            <>
              <img src="media/cg_about_step2.png" alt="" />
            </>,
          ]}
        />
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <img src="media/cg_about_step3.png" alt="" />
            </>,
            <>
              <Title size="0">Trusted Testing</Title>
              <Text>
                We use PCR testing machines, the gold standard for COVID-19
                screening. All our devices are CE-IVD approved, so conform to
                the highest regulatory standards.
              </Text>
            </>,
          ]}
        />
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <Title size="0">Reliable Results</Title>
              <Text>
                Our PCR machines are highly sensitive so can detect even the
                lowest levels of virus. This means that a negative test result
                provides the most reliable indication you can continue to work
                and travel safely.
              </Text>
            </>,
            <>
              <img src="media/cg_about_step4.png" alt="" />
            </>,
          ]}
        />
        <GridColumnToRow
          alignItems="center"
          array={[
            <>
              <img src="media/cg_about_step5.png" alt="" />
            </>,
            <>
              <Title size="0">Our Testing Experience</Title>
              <Text>
                ExpressTest is a programme run by the direct to consumer
                division of Cignpost Diagnostics Limited who are providing
                COVID-19 testing facilities for some of the world’s leading
                companies and organisations, such as Netflix, the BBC, the
                Scottish Premiership and the PGA European Tour.
              </Text>
            </>,
          ]}
        />
      </Container>
    </SectionDarkBg>
  );
};

export default WhyChooseUsAbridged;
