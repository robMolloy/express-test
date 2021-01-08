import React, { Fragment } from "react";

import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import FlexibleGrid from "../../generic/grids/FlexibleGrid";
import Container from "../../generic/containers/Container";
import SectionLightBg from "../../generic/sections/SectionLightBg";
import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const BlogOverview = () => {
  return (
    <SectionLightBg>
      <Container>
        <Title size="0" align="center">
          ExpressTest News and Blogs
        </Title>
        <Text align="center">
          Discover the latest from ExpressTest and news on the COVID-19 pandemic
          below.
          <br />
          For any media enquires please contact our PR agency, Launch on{" "}
          <a href="expresstest@hellolaunch.co.uk">
            expresstest@hellolaunch.co.uk
          </a>
        </Text>
        <br />

        <GridColumnToRow
          array={[
            <>
              <img src="media/gatwick_opening.jpg" alt="" />
              <div>
                <Title size="1" align="center">
                  ExpressTest Launches at Gatwick Airport
                </Title>
                <small>
                  <FlexibleGrid
                    justify="space-between"
                    spacing={0}
                    array={[<>by Cignpost</>, <>on November 19th 2020</>]}
                  />
                </small>
                <Text align="center">
                  During 2020, hopping on a plane and travelling to far-flung
                  destinations hasn’t been as easy as it once was. With many of
                  us longing to have the luxury of flying once more, and others
                  having to make essential air travel...
                </Text>
              </div>
            </>,
            <>
              <img src="media/girlgloves.png" alt="" />
              <div>
                <Title size="1" align="center">
                  Tips to Stay Safe and Well this Winter
                </Title>
                <small>
                  <FlexibleGrid
                    justify="space-between"
                    spacing={0}
                    array={[<>by Cignpost</>, <>on November 19th 2020</>]}
                  />
                </small>
                <Text align="center">
                  With lockdown 2.0 underway and the colder months approaching,
                  you may have questions around how you can keep yourself and
                  your loved ones safe this winter. Take a look at our guidance
                  and advice to ensure...
                </Text>
              </div>
            </>,
            <>
              <img src="media/hometest.jpg" alt="" />
              <div>
                <Title size="1" align="center">
                  ExpressTest Home Kits
                </Title>
                <small>
                  <FlexibleGrid
                    justify="space-between"
                    spacing={0}
                    array={[<>by Cignpost</>, <>on November 19th 2020</>]}
                  />
                </small>
                <Text align="center">
                  With rapid testing continuing to play a vital role in
                  preventing the spread of COVID-19 and following the successful
                  launch of Cignpost Diagnostics Limited’s screening centres
                  within the UK, ExpressTest are conducting a pilot for home
                  testing kits
                </Text>
              </div>
            </>,
          ]}
        />
      </Container>
    </SectionLightBg>
  );
};

export default BlogOverview;
