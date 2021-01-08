import React from "react";

import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Accordion from "../../generic/layouts/PlusAccordion";

const ContactUsQuestions = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title>Contact Us</Title>
        <br></br>
        <GridContainer spacingY={0}>
          <GridItem xs={12} sm={6}>
            <Accordion summary="What is the ExpressTest programme?">
              ExpressTest is a COVID-19 screening service providing fast,
              accurate and reliable RT - PCR screening across the UK.
            </Accordion>
            <Accordion summary="How do I book a test?">
              You can book and pay for your preferred time and testing centre
              via our ‘Book a Test’ page. Within 30 minutes of paying and
              booking, you will then be sent a confirmation email with a QR
              code. You must bring a copy of the QR code with you on the day of
              your test. Please also bring a copy of your valid passport if you
              require a Fit to Fly Certificate or have booked for Test to
              Release. For further information on our booking process please
              visit our ‘How It Works’ page.
            </Accordion>
            <Accordion summary="Can I reschedule my test?">
              We know that your plans can change. Unfortunately, due to the high
              demand for our services, we can only amend bookings subject to
              availability if your test is more than 72 hours ahead. This will
              be subject to a £15 administration charge.  If your booking is
              more than 72 hours ahead and you wish to amend your booking,
              please visit our Booking Amendment page.
            </Accordion>
            <Accordion summary="Can I use a Fit to Fly certificate if I'm travelling by ship, train, or car?">
              Yes - a Fit to Fly certificate has all the necessary information
              most governments require to allow entry and can be used regardless
              of how you are travelling (e.g. ship, coach, train, or airplane).
              It is your responsibility to confirm what the specific
              requirements of your destination country are to ensure that you
              can use our Fit to Fly certificate as proof of your test results
              for entry.
            </Accordion>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Accordion summary="How long does it take to get my result?">
              We aim to deliver your results by 10pm the day AFTER your test,
              however in some cases results could take up to 48 hours to
              receive, especially if your sample needs to be re-tested. In the
              majority of cases, if we need to re-test your sample then this
              would not require a second sample to be taken from you, however in
              very limited circumstances, you may need to come back to our
              testing site to be re-tested.
            </Accordion>
            <Accordion summary="How much is the test?">
              Our testing service costs £99 and is bookable via our website. We
              offer subsidised concessions for airport passengers and
              airline/airport staff. Fit to Fly tests:Airline passengers must
              bring their valid passport and flight booking reference to their
              screening, whilst airline/airport employees must bring their
              employee identification. Test to Release tests:Customers must
              bring their valid passport and QR code to their screening.
            </Accordion>
            <Accordion summary="Can I cancel my booking?">
              We know that your plans can change. Unfortunately, due to the high
              demand for our services, your booking is subject to our
              cancellation policy. You can view our cancellation policy on our
              Terms and Conditions here. To cancel your booking, visit our
              Cancellation Request page to find out more.
            </Accordion>
          </GridItem>
        </GridContainer>
      </Container>
    </SectionLightBg>
  );
};

export default ContactUsQuestions;
