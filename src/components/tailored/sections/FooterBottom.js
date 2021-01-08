import React from "react";

import useTheme from "@material-ui/styles/useTheme";

import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Container from "../../generic/containers/Container";
import SectionBlockColor from "../../generic/sections/SectionBlockColor";

const FooterBottom = () => {
  const theme = useTheme();
  return (
    <SectionBlockColor bg={theme.palette.secondary.light} color="#FFFFFF">
      <Container>
        <GridColumnToRow
          array={[
            <div style={{ textAlign: "center" }}>
              <small>
                © 2020 ExpressTest - All Rights Reserved. Design by Mooch.
              </small>
            </div>,
            <div style={{ textAlign: "center" }}>
              <img
                src="media/AllowMe-PoweredByRFID-logo-white-2018.png"
                alt=""
                style={{ maxHeight: theme.spacing(5) }}
              />
            </div>,
            <>
              <img
                src="media/payment-01.svg"
                alt=""
                style={{ maxHeight: theme.spacing(5) }}
              />
            </>,
          ]}
        />
      </Container>
    </SectionBlockColor>
  );
};

export default FooterBottom;
