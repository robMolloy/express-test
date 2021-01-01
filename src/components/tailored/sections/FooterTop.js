import React from "react";

import useTheme from "@material-ui/styles/useTheme";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import LightAnchor from "../../generic/anchors/LightAnchor";
import Button from "../../generic/buttons/ButtonPrimary";
import Container from "../../generic/containers/Container";

import SectionBlockColor from "../../generic/sections/SectionBlockColor";

const FooterTop = () => {
  const theme = useTheme();
  return (
    <SectionBlockColor bg={theme.palette.secondary.main} color="#FFFFFF">
      <Container>
        <GridColumnToRow
          array={[
            <>
              <h2>Explore</h2>
              <LightAnchor href="./">Home</LightAnchor>
              <br />
              <LightAnchor href="./">About</LightAnchor>
              <br />
              <LightAnchor href="./">How It Works</LightAnchor>
              <br />
              <LightAnchor href="./">News & Blogs</LightAnchor>
            </>,
            <>
              <h2>Book A Test</h2>
              <LightAnchor>Testing Centres</LightAnchor>
            </>,
            <>
              <h2>Customer Care</h2>
              <LightAnchor> Help & FAQs</LightAnchor>
              <br />
              <LightAnchor> Privacy Policy</LightAnchor>
              <br />
              <LightAnchor> Terms & Conditions</LightAnchor>
            </>,
            <>
              <h2>Have a question for us?</h2>
              <Button>Contact Us</Button>
            </>,
          ]}
        />
      </Container>
    </SectionBlockColor>
  );
};

export default FooterTop;
