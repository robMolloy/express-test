import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Accordion from "../../generic/layouts/PlusAccordion";

const FaqsTestDayAndYourResults = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title>Test Day And Your Results</Title>
        <br></br>
        <GridContainer spacingY={0}>
          <GridItem xs={12} sm={6}>
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
            <Accordion summary="Will there be somewhere on site I can go to wait for my results before my flight?">
              After we have taken your swab you will need to return home. There
              are no customer facilities on site. We aim to email your result to
              you by 10pm the day AFTER your test, however in some cases, this
              could take up to 48 hours to receive.
            </Accordion>
            <Accordion summary="What happens if I’m flying the same day as my test? Can I fly without the results?">
              We aim to deliver your result by 10pm the day AFTER your test,
              however in some cases this can take up to 48 hours. We recommend
              that you take a test 72 hours in advance of when you require your
              results. Different countries have different requirements, which
              you must check before you travel. This is to ensure that you get
              your results and certificate in time for your flight. In most
              cases, we will aim to email your results to you by 10pm the day
              AFTER your test. If you have not received your results within 48
              hours of your test, contact us via our Customer Service Support
              page.
            </Accordion>
            <Accordion summary="Does it hurt having a swab taken?">
              A swab is taken from the throat and nasal passage. It is a quick
              test and does not hurt but can be uncomfortable.
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
            <Accordion summary="How will I get the results? Will I need to show them to staff at check-in before my flight?">
              We aim to deliver your test results by 10pm the day AFTER your
              test, however in some cases this could take up to 48 hours. If you
              have not received your results after 48 hours of your test, please
              contact us using the appropriate form on our 'Contact Us' page on
              our website here: https://support.expresstest.co.uk/. Fit to Fly
              tests for travellers: If you have booked a test with a Fit to Fly
              certificate for international travel, if your test results are
              negative you will receive a Fit to Fly certificate that shows you
              are negative as an attachment to your results email. You will only
              receive this if you have provided us with your passport number at
              the time of booking. The certificate will include your personal
              details (name, date of birth, passport number), the time and date
              your sample was collected, the date your sample was tested at our
              laboratory, your result and a signatory confirmation from
              ExpressTest. You can show this certificate to staff at check-in as
              required. However, we recommend that you check with your airline
              before booking the test to ensure that they accept the certificate
              we provide.
            </Accordion>
            <Accordion summary="What does it mean if I receive a positive test result?">
              If you received a positive COVID-19 test result you must
              self-isolate for the next ten days. For further guidance on
              self-isolation, read here:
              <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/self-isolation-and-treatment/when-to-self-isolate-and-what-to-do/">
                https://www.nhs.uk/conditions/coronavirus-covid-19/self-isolation-and-treatment/when-to-self-isolate-and-what-to-do/
              </a>
              . We will notify the UK Public Health authority and NHS Test and
              Trace, who will contact you with further information.
            </Accordion>
            <Accordion summary="Is your test appropriate for children?">
              Yes, our PCR test can be taken by children of all ages. Your child
              will see people wearing aprons, gloves and mask (this is to help
              keep everyone as safe as possible). If you are able to sit next to
              your child or have them on your lap during swabbing, it will give
              them a sense of comfort. If you are not able to do this, then we
              ask that you unbuckle your seat belt and turn around to face your
              child to provide re-assurance. You may wish to bring a toy to help
              soothe or entertain your child.
            </Accordion>
          </GridItem>
        </GridContainer>
      </Container>
    </SectionLightBg>
  );
};

export default FaqsTestDayAndYourResults;
