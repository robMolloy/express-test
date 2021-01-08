import React from "react";
// import Button from "../custom/Buttom";

import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Container from "../../generic/containers/Container";
import SectionDarkBg from "../../generic/sections/SectionDarkBg";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const HowItWorks = (props = {}) => {
  let dark, intro;
  ({ dark = true, intro = true } = props);

  let Component = dark ? SectionDarkBg : SectionLightBg;
  return (
    <Component>
      {intro && (
        <>
          <Title size="0" align="center">
            How It Works
          </Title>
          <Text align="center">
            ExpressTest offers two COVID-19 testing solutions. Either, travel to
            one of our screening centres, or have the test sent to your home and
            administer it yourself. Choose the type of test you’d like below.
            <br />
            <br />
            Screening Facilities Home Testing Kits
          </Text>
          <br />
        </>
      )}
      <Container>
        <GridColumnToRow
          wrap="wrap-reverse"
          alignItems="center"
          array={[
            <img src="media/cg_howitworks_point1.png" alt="" />,
            <div>
              <Title size="0">Booking Your Test</Title>
              <Text>
                We now have sites across the UK.
                <br />
                <br />
                Book your slot at your preferred facility and pay online. You
                will be sent a confirmation email with a QR code.
              </Text>
            </div>,
          ]}
        />
        <GridColumnToRow
          alignItems="center"
          array={[
            <div>
              <Title size="0">Arriving For Your Test</Title>
              <Text>
                Arrive at the drive-through screening facility 15 minutes before
                your allotted time slot. You must bring photo ID with you.
                <br />
                <br />
                You will be greeted by a member of the ExpressTest team, who
                will then direct you to the swabbing area for your allocated
                slot.
                <br />
                <br />
                Please bring your passport or national ID card with you if you
                want a Fit to Fly certificate.
              </Text>
            </div>,
            <img src="media/cg_howitworks_point2.png" alt="" />,
          ]}
        />
        <GridColumnToRow
          wrap="wrap-reverse"
          alignItems="center"
          array={[
            <img src="media/cg_howitworks_point3.png" alt="" />,
            <div>
              <Title size="0">Our Testing Process</Title>
              <Text>
                Anyone who has registered for a test will then be safely swabbed
                by one of our sample takers in full PPE.
                <br />
                <br />
                Swabbing involves taking a sample from both the back of the
                throat and the nasal passage.
                <br />
                <br />
                Your swab sample is then safely stored and labelled, ready to be
                sent to an ExpressTest laboratory.
              </Text>
            </div>,
          ]}
        />

        <GridColumnToRow
          alignItems="center"
          array={[
            <div>
              <Title size="0">After The Test</Title>
              <Text>
                Your sample will then be transported to our laboratory, where it
                will be tested for COVID-19. See our{" "}
                <a href="./">Why Choose Us</a> section if you require further
                information.
                <br />
                <br />
                You will receive your results via email.
                <br />
                <br />
                We aim to deliver your results by 10pm the day after your test,
                however, <b>results could take up to 48 hours to receive</b>. It
                is your responsibility to ensure you allow at least 48 hours to
                receive your results before planning any arrangements, such as
                travel, that may require your results by a certain time.
              </Text>
            </div>,
            <img src="media/cg_howitworks_point4.png" alt="" />,
          ]}
        />
        <GridColumnToRow
          wrap="wrap-reverse"
          alignItems="center"
          array={[
            <img src="media/cg_howitworks_point5.png" alt="" />,
            <div>
              <Title size="0">Your Results</Title>
              <Text>
                If your result is negative, you will receive email confirmation
                of this. You will also receive a ‘Fit to Fly’ certificate if you
                have chosen to receive one at time of booking, although you must
                check with your travel operator that this is acceptable
                documentation.
                <br />
                <br />
                We aim to deliver your results by 10pm the day after your test,
                however, results could take up to 48 hours to receive. It is
                your responsibility to ensure you allow at least 48 hours to
                receive your results before planning any arrangements, such as
                travel, that may require your results by a certain time.
                <br />
                <br />
                If your result is positive, we will contact you with
                instructions on the appropriate next steps to take. We will then
                contact the appropriate UK Public Health authority on your
                behalf and send your details on to the NHS Test and Trace
                service.
              </Text>
            </div>,
          ]}
        />
      </Container>
    </Component>
  );
};

export default HowItWorks;
