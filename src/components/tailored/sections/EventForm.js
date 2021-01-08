import React from "react";
import Input from "../../generic/fields/Input";

import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";
import InnerContainer from "../../generic/containers/InnerContainer";

const EventForm = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title>Event</Title>
        <br></br>
        {/* <InnerContainer> */}
        <GridContainer spacing={5}>
          <GridItem xs={12} sm={9}>
            <Input label="Event Name *" />
          </GridItem>

          <GridItem xs={12} sm={3}>
            <Input label="Date" />
          </GridItem>

          <GridItem xs={12} sm={6}>
            <Input label="Time Start" />
          </GridItem>

          <GridItem xs={12} sm={6}>
            <Input label="Time Finish" />
          </GridItem>

          <GridItem xs={12} sm={6}>
            <Input label="Host First Name *" />
          </GridItem>

          <GridItem xs={12} sm={6}>
            <Input label="Host Last Name *" />
          </GridItem>

          <GridItem xs={12}>
            <Input label="Location" />
          </GridItem>

          <GridItem xs={12}>
            <Input label="Description" multiline />
          </GridItem>
        </GridContainer>
        {/* </InnerContainer> */}
        <br />
      </Container>
    </SectionLightBg>
  );
};

export default EventForm;
