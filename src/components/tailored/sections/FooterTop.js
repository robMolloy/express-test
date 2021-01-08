import React from "react";

import useTheme from "@material-ui/styles/useTheme";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import LightAnchor from "../../generic/anchors/LightAnchor";
import Button from "../../generic/buttons/ButtonPrimary";
import Container from "../../generic/containers/Container";
import Title from "../../generic/text/Title";

import SectionBlockColor from "../../generic/sections/SectionBlockColor";
import ButtonRow from "../../generic/grids/ButtonRow";

const FooterTop = () => {
  const theme = useTheme();
  return (
    <SectionBlockColor bg={theme.palette.secondary.main} color="#FFFFFF">
      <Container>
        <GridColumnToRow
          // className="text-center-xs"
          array={[
            <>
              <Title size="1">Explore</Title>
              <LightAnchor href="./">Home</LightAnchor>

              <LightAnchor href="./">About</LightAnchor>

              <LightAnchor href="./">How It Works</LightAnchor>

              <LightAnchor href="./">News & Blogs</LightAnchor>
            </>,
            <>
              <Title size="1">Book A Test</Title>
              <LightAnchor>Testing Centres</LightAnchor>
            </>,
            <>
              <Title size="1">Customer Care</Title>
              <LightAnchor> Help & FAQs</LightAnchor>

              <LightAnchor> Privacy Policy</LightAnchor>

              <LightAnchor> Terms & Conditions</LightAnchor>
            </>,
            <>
              <Title size="1">Have a question for us?</Title>
              <ButtonRow array={[<Button>Contact Us</Button>]} />
            </>,
          ]}
        />
      </Container>
    </SectionBlockColor>
  );
};

export default FooterTop;
