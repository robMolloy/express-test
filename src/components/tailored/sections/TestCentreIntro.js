import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const TestCentreIntro = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title align="center" size="1">
          Book Your COVID-19 Screening
        </Title>
        <Text align="center">
          We now have sites accross the UK.
          <br />
          You will be sent a confirmation email with a QR code.
          <br />
          <br />
          <b>
            If you are experiencing any COVID-19 symptoms, please do not visit
            our screening facility but contact the NHS on 111 to arrange a test.
          </b>
          <br />
          <br />
          Book your preferred slot at your nearest centre using our booking
          system below:
          <br />
          <br />
          If you require a Fit to Fly certificate to travel to another country,
          you will require passport/national ID card and flight details for all
          travellers to complete this booking.
        </Text>
      </Container>
    </SectionLightBg>
  );
};

export default TestCentreIntro;
