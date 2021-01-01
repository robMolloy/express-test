import React from "react";
import Container from "../../generic/containers/Container";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import SectionDarkBg from "../../generic/sections/SectionDarkBg";

const BookYourTest = () => {
  return (
    <SectionDarkBg>
      <Container>
        <br />
        <br />
        <h2>Book Your Test Today</h2>
        <p>
          ExpressTest offers two COVID-19 testing solutions. Either, travel to
          one of our screening centres, or have the test sent to your home and
          administer it yourself. Choose the type of test you’d like below
        </p>

        <br />

        <GridContainer justify="center" spacing={2}>
          <GridItem>
            <ButtonPrimary>Screening Facility Test</ButtonPrimary>
          </GridItem>
          <GridItem>
            <ButtonPrimary>Home Test (Coming Soon)</ButtonPrimary>
          </GridItem>
        </GridContainer>

        <br />
        <br />
        <br />
      </Container>
    </SectionDarkBg>
  );
};

export default BookYourTest;
