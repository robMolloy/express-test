import React from "react";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import Accordion from "../../generic/layouts/PlusAccordion";

const FaqsOtherQuestions = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title>Other Questions</Title>
        <br></br>
        <GridContainer spacingY={0}>
          <GridItem xs={12} sm={6}>
            <Accordion summary="How will I get the results? Will I need to show them to staff at check-in before my flight?">
              We aim to deliver your test results by 10pm the day AFTER your
              test, however in some cases this could take up to 48 hours. If you
              have not received your results after 48 hours of your test, please
              contact us using the appropriate form on our 'Contact Us' page on
              our website here:{" "}
              <a href="https://support.expresstest.co.uk/">
                https://support.expresstest.co.uk/
              </a>
              . Fit to Fly tests for travellers: If you have booked a test with
              a Fit to Fly certificate for international travel, if your test
              results are negative you will receive a Fit to Fly certificate
              that shows you are negative as an attachment to your results
              email. You will only receive this if you have provided us with
              your passport number at the time of booking. The certificate will
              include your personal details (name, date of birth, passport
              number), the time and date your sample was collected, the date
              your sample was tested at our laboratory, your result and a
              signatory confirmation from ExpressTest. You can show this
              certificate to staff at check-in as required. However, we
              recommend that you check with your airline before booking the test
              to ensure that they accept the certificate we provide.
            </Accordion>
            <Accordion summary="What's the benefit of a PCR test vs a LAMP test?">
              A PCR test is the gold standard in COVID-19 testing and is the
              test used by the NHS. It offers the most accurate results as it
              can detect even the smallest amount of virus. This means that a
              negative PCR test result provides the most reliable indication you
              can safely continue to work and travel. A LAMP test is also
              analysed in a laboratory but the test is less accurate and
              sensitive. Therefore, it may give a negative result to people who
              have a small amount of virus present. A negative LAMP test
              provides you with some protection, but not as much as a PCR test.
            </Accordion>
            <Accordion summary="Is ExpressTest affiliated with the UK Government’s testing programme?">
              Express Test is a DHSC (Department of Health & Social Care)
              approved private provider of COVID-19 screening services. We have
              submitted our application to UKAS for ISO 15189 certification. We
              comply with all the government regulations with respect to
              submitting results to the relevant Public Health Authority.
            </Accordion>
            <Accordion summary="What is the difference between an antibody and antigen test?">
              An antibody test detects if you have already had the virus by
              checking for the presence of COVID-19 antibodies in your immune
              system. An antigen test only detects the virus that is currently
              in your body. As part of our ExpressTest service, we only offering
              Polymerase Chain Reaction (PCR) tests which detects presence of
              virus.
            </Accordion>
            <Accordion summary="How can we contact you?">
              Depending on your enquiry, you can contact us via our Customer
              Service Support website.
            </Accordion>
            <Accordion summary="Why aren't you offering a test with faster results like some other providers?">
              Other providers may use a different type of test, such as a LAMP
              test, which is less sensitive and therefore a negative result is
              only valid for a shorter period of time. ExpressTest uses the gold
              standard PCR test.
            </Accordion>
            <Accordion summary="What regulations do ExpressTest comply with?">
              ExpressTest use Cignpost Diagnostics’s laboratories and doctors
              who are regulated and compliant with the requisite regulations and
              insurance to administer and process testing. ExpressTest is a DHSC
              (Department of Health and Social Care) approved private provider
              of Covid-19 screening services.
            </Accordion>
            <Accordion summary="What is a Test to Release?">
              The Test to Release for International Travel scheme is for people
              who need to self-isolate on arrival in England.  Under the scheme
              you can choose to pay for a private COVID-19 test. If the result
              is negative, you can stop self-isolating. We plan on launching
              this test type in mid-January 2021. For more information about the
              scheme visit the government website. We are yet to launch our Test
              To Release service, and we hope to do so by mid-January. You can
              register your interest and be among the first to know about our
              launch by leaving your details here:
              https://support.expresstest.co.uk/test-to-release.    
            </Accordion>
          </GridItem>
          <GridItem xs={12} sm={6}>
            <Accordion summary="What is a PCR test?">
              A PCR (Polymerase Chain Reaction) test is an antigen test and is
              used to detect a virus’ genetic material (DNA/RNA) from a throat
              and nasal swab. This type of test is very accurate and is
              considered to be the gold standard in COVID-19 testing and is used
              by the NHS.
            </Accordion>
            <Accordion summary="Will the new strain of Covid continue to be detected by an ExpressTest PCR?">
              Yes, our tests have been specifically designed to focus on highly
              conserved regions of the viral RNA. The variations or mutations in
              the viral genome that are being discovered are in different
              regions of the viral genome and therefore do not impact the
              sensitivity or specificity of our tests. As always, we will
              continue to monitor the science to provide a highly effective and
              accurate test result.
            </Accordion>
            <Accordion summary="When will your home testing kits be available?">
              We look to launch this product in early 2021. Please check our
              website regularly to stay informed.
            </Accordion>
            <Accordion summary="How will my data be stored?">
              We have an accredited data partner, RFIDentikit LTD, who will
              safely store your data in line with GDPR and other data laws.
              Cignpost Diagnostics Limited is a data controller and RFIDentikit
              LTD are our data processor. Please see our Fair Processing Notice
              for further details.
            </Accordion>
            <Accordion summary="Can I get a test if I'm not an airport passenger?">
              ExpressTest can be used by anyone who has booked and is able to
              travel by vehicle to one of our screening facilities. Simply book
              a slot online for £99 and then come to the test centre at the
              allocated time.
            </Accordion>
            <Accordion summary="Are your staff conducting the screenings medically qualified?">
              Our screening practitioners have all undergone rigorous medical
              training in how to administer and process swabbing.
            </Accordion>
            <Accordion summary="What are the different entry requirements for each country?">
              Requirements for entry to countries during the COVID-19 pandemic
              may differ and it is your responsibility to ensure that you have
              all the necessary documentation and information before you travel.
              You can check individual country details
              at  https://www.gov.uk/foreign-travel-advice.
            </Accordion>
            <Accordion summary="Express Test contact details for use by the Police">
              Authorised requests for information can be requested via
              police.contact@cignpostdiagnostics.com.
            </Accordion>
          </GridItem>
        </GridContainer>
      </Container>
    </SectionLightBg>
  );
};

export default FaqsOtherQuestions;
