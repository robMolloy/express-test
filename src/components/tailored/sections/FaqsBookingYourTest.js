import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Accordion from "../../generic/layouts/PlusAccordion";

const FaqsBookingYourTest = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title>Booking Your Test</Title>
        <br></br>
        <GridContainer spacingY={0}>
          <GridItem xs={12} sm={6}>
            <Accordion summary="There are no slots available on your website - can I make a booking over the phone?">
              Bookings can only be made via our website and cannot be made by
              phone. Our website currently shows all available slots and you
              will not find additional slots by calling our customer care
              centre. Follow us on Twitter using our handle @ExpressTestUK to
              see when we release additional slots at each of our locations
              across the UK.
            </Accordion>
            <Accordion summary="Can I get a test if I'm not an airport passenger?">
              ExpressTest can be used by anyone who has booked and is able to
              travel by vehicle to one of our screening facilities. Simply book
              a slot online for £99 and then come to the test centre at the
              allocated time.
            </Accordion>
            <Accordion summary="Can I get an example of the Fit to Fly certificate in advance?">
              Unfortunately, we are not able to share this.
            </Accordion>
            <Accordion summary="Can I reschedule my test?">
              We know that your plans can change. Unfortunately, due to the high
              demand for our services, we can only amend bookings subject to
              availability if your test is more than 72 hours ahead. This will
              be subject to a £15 administration charge.  If your booking is
              more than 72 hours ahead and you wish to amend your booking,
              please visit our Booking Amendment page.
            </Accordion>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Accordion summary="I have not received my booking confirmation and /or QR code what do I do?">
              If you’ve paid for and made a booking, your ExpressTest
              confirmation number (a reference beginning with CPT) will be
              emailed and texted to you; this could take up to 30 minutes to
              receive, after you’ve made your booking. We suggest you also check
              your Spam/Junk folder for the email, as some email providers may
              place it there. If after 30 minutes of paying for and making your
              booking you have not received your email in either your Inbox or
              your Spam/Junk folder, please fill in the appropriate form on our
              Customer Service Support website here:
              <a href="https://support.expresstest.co.uk/request-confirmation-form">
                https://support.expresstest.co.uk/request-confirmation-form
              </a>
              .  
            </Accordion>
            <Accordion summary="Can I walk or bike to the testing centres?">
              No, you must arrive by car as our service is drive through car
              service only. To ensure the highest levels of safety for both our
              customers and our staff, we must ask that customers do not leave
              their vehicle whilst at our testing facilities.
            </Accordion>
            <Accordion summary="What are the different entry requirements for each country?">
              Requirements for entry to countries during the COVID-19 pandemic
              may differ and it is your responsibility to ensure that you have
              all the necessary documentation and information before you travel.
              You can check individual country details at  
              <a href="https://www.gov.uk/foreign-travel-advice">
                https://www.gov.uk/foreign-travel-advice
              </a>
              .
            </Accordion>
            <Accordion summary="Can I add someone to my booking?">
              No. Unfortunately, once a booking is made, it cannot be amended.
            </Accordion>
          </GridItem>
        </GridContainer>
      </Container>
    </SectionLightBg>
  );
};

export default FaqsBookingYourTest;
