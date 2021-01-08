import React from "react";
import Input from "../../generic/fields/Input";

import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/TitleUnderline";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";

const ContactUsForm = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title>Contact Us</Title>
        <br></br>
        <GridContainer spacingY={0}>
          <GridItem xs={12}>
            <Input label="Event Name *" />
          </GridItem>

          <GridItem xs={12} sm={6}></GridItem>
        </GridContainer>
        <br />
      </Container>
    </SectionLightBg>
  );
};

export default ContactUsForm;
