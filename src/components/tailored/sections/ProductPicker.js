import React from "react";

import SectionLightBg from "../../generic/sections/SectionLightBg";
import Button from "../../generic/buttons/Button";
// import {  } from "../generic";
import ButtonPrimary from "../../generic/buttons/ButtonPrimary";
import Container from "../../generic/containers/Container";
import GridContainer from "../../generic/grids/GridContainer";
import GridItem from "../../generic/grids/GridItem";

const ProductPicker = () => {
  const [state, setState] = React.useState(0);

  return (
    <SectionLightBg>
      <Container>
        <GridContainer justify="center" spacing={2}>
          <GridItem>
            <Button
              onClick={() => setState(0)}
              color={state === 0 ? "primary" : ""}
            >
              Screening Facilities
            </Button>
          </GridItem>
          <GridItem>
            <Button
              onClick={() => setState(1)}
              color={state === 1 ? "primary" : ""}
            >
              Home Testing Kits
            </Button>
          </GridItem>
          <GridItem>
            <Button
              onClick={() => setState(2)}
              color={state === 2 ? "primary" : ""}
            >
              Test To Release
            </Button>
          </GridItem>
        </GridContainer>
        <br />
        {state === 0 && <></>}
        {state === 1 && <b>Home testing kits are coming soon</b>}

        {state === 2 && (
          <>
            <b>Test to release programme coming soon.</b>
            <br />
            <br />
            <ButtonPrimary>
              Register Your Interest In Test To Release
            </ButtonPrimary>
          </>
        )}
      </Container>
    </SectionLightBg>
  );
};

export default ProductPicker;
