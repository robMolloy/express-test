import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Accordion from "../../generic/layouts/PlusAccordion";

const FaqsAboutExpressTest = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title>About ExpressTest</Title>
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
              require a Fit to Fly Certificate. For further information on our
              booking process please visit our ‘How It Works’ page.
            </Accordion>
            <Accordion summary="Can I cancel my booking?">
              We know that your plans can change. Unfortunately, due to the high
              demand for our services, your booking is subject to our
              cancellation policy. You can view our cancellation policy on our
              Terms and Conditions here. To cancel your booking, visit our
              Cancellation Request page to find out more.
            </Accordion>
            <Accordion summary="What is the Fit to Fly certificate?">
              The Fit to Fly certificate provides evidence that you have
              undertaken COVID-19 screening prior to your flight. It can also be
              used by international travellers using other modes of
              transportation including ship, car, and train. Travellers are
              eligible for the Fit to Fly certificate if their test result is
              negative, but they must ensure that they bring their passport and
              travel booking reference to their appointment. The certificate
              will include your personal details (name, date of birth, passport
              number), the time and date your sample was collected, the date
              your sample was tested at our laboratory, your result and a
              signatory confirmation from ExpressTest. Airport staff who test
              negative and who require a Fit to Fly certificate must bring their
              passport and employee identification to their appointment. The Fit
              to Fly certificate will be emailed, along with your test result,
              to the email address that you have provided. We aim to deliver
              your results and Fit to Fly certificate by 10pm the day AFTER your
              test, however in some cases this could take up to 48 hours. You
              must check with your travel provider that they will accept this
              documentation, before booking a test. Requirements for entry to
              countries during the COVID-19 pandemic may differ and it is your
              responsibility to ensure that you have all the necessary
              documentation and information before you travel. ExpressTest do
              not accept any liability should your travel provider or
              destination country not accept this document. For the latest
              travel requirements and advice from the Foreign, Commonwealth &
              Development Office click here:
              https://www.gov.uk/foreign-travel-advice.
            </Accordion>
            <Accordion summary="Where are your testing centres?">
              We currently have testing centres at Edinburgh, Gatwick and
              Heathrow airports, as well as local testing centres across the
              country - please see our 'Book a Test' page to find the test
              centre nearest you.
            </Accordion>
            <Accordion summary="What documentation do I need to bring with me for a test?">
              You must bring a copy of your booking email with the QR code that
              will have been attached to your email confirmation to gain access
              to our testing site. If you have booked a test with a Fit to Fly
              certificate, you will need to bring a valid passport or national
              ID card to authenticate the Fit to Fly certificate. If you are an
              airline passenger for a Fit to Fly test, you must also bring your
              airline booking reference. All other travellers should bring
              confirmation references from their travel providers (e.g. ship,
              train, coach, etc). Any staff members claiming staff discounts
              must also bring their appropriate employee ID.
            </Accordion>
            <Accordion summary="How will my data be stored?">
              We have an accredited data partner, RFIDentikit LTD, who will
              safely store your data in line with GDPR and other data laws.
              Cignpost Diagnostics Limited is a data controller and RFIDentikit
              LTD are our data processor. Please see our Fair Processing Notice
              for further details.
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
              Our testing service costs £99 per test and is bookable via our
              website. At some locations we offer concessions for airport
              passengers and airline/airport staff, meaning prices could be
              lower.
            </Accordion>
            <Accordion summary="Can I reschedule my test?">
              We know that your plans can change. Unfortunately, due to the high
              demand for our services, we can only amend bookings subject to
              availability if your test is more than 72 hours ahead. This will
              be subject to a £15 administration charge.  If your booking is
              more than 72 hours ahead and you wish to amend your booking,
              please visit our Booking Amendment page.
            </Accordion>
            <Accordion summary="If I want a Fit to Fly certificate, how long before my flight do I need to take a test?">
              We recommend that you undertake a test 72 hours before your flight
              departure to allow sufficient time for your test results to be
              processed. However, you must check this with your travel provider
              and ensure that this is appropriate given the regulations in your
              destination country. Please also note that we aim to deliver your
              test results by 10pm the day AFTER your test day, however, in some
              cases this could take up to 48 hours to receive. Please ensure you
              book your test while taking into account these delivery times to
              ensure you receive your results when you need them.
            </Accordion>
            <Accordion summary="Is ExpressTest affiliated with the UK Government’s testing programme?">
              Express Test is a DHSC (Department of Health & Social Care)
              approved private provider of COVID-19 screening services. We have
              submitted our application to UKAS for ISO 15189 certification. We
              comply with all the government regulations with respect to
              submitting results to the relevant Public Health Authority.
            </Accordion>
            <Accordion summary="What are your opening hours?">
              Bookings are available between 08:00-20:00 7 days a week. Please
              arrive 15 minutes before your allocated slot.
            </Accordion>
          </GridItem>
        </GridContainer>
      </Container>
    </SectionLightBg>
  );
};

export default FaqsAboutExpressTest;
