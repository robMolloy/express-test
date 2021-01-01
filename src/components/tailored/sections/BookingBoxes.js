import React from "react";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import BookingBox from "../../tailored/items/BookingBox";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import InnerContainer from "../../generic/containers/InnerContainer";

const BookingBoxes = () => {
  return (
    <SectionLightBg>
      <Container>
        <InnerContainer>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <BookingBox>Birmingham NEC</BookingBox>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <BookingBox>Burnley FC</BookingBox>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <BookingBox>Edinburgh Airport</BookingBox>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <BookingBox>Gatwick Airport</BookingBox>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <BookingBox>Heathrow Airport</BookingBox>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <BookingBox>Northampton - Northampton Saints RFC</BookingBox>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <BookingBox>Reading - Reading FC (Madejski Stadium)</BookingBox>
            </GridItem>
            <GridItem xs={12} sm={6}>
              <BookingBox>Southampton - Eastleigh FC</BookingBox>
            </GridItem>
          </GridContainer>
        </InnerContainer>
      </Container>
    </SectionLightBg>
  );
};

export default BookingBoxes;
