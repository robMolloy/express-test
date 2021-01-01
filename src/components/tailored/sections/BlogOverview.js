import React, { Fragment } from "react";

import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Container from "../../generic/containers/Container";
import SectionLightBg from "../../generic/sections/SectionLightBg";

const BlogOverview = () => {
  return (
    <SectionLightBg>
      <Container>
        <h1>ExpressTest News and Blogs</h1>
        <p>
          Discover the latest from ExpressTest and news on the COVID-19 pandemic
          below.
          <br />
          For any media enquires please contact our PR agency, Launch on
          expresstest@hellolaunch.co.uk
        </p>
        <br />

        <GridColumnToRow
          array={[
            <>
              <img src="/media/gatwick_opening.jpg" alt="" />
              <div>
                <h2>ExpressTest Launches at Gatwick Airport</h2>
                <small>
                  <GridColumnToRow
                    justify="space-between"
                    spacing={0}
                    array={[<>by Cignpost</>, <>on November 19th 2020</>]}
                  />
                </small>
                <p>
                  During 2020, hopping on a plane and travelling to far-flung
                  destinations hasn’t been as easy as it once was. With many of
                  us longing to have the luxury of flying once more, and others
                  having to make essential air travel...
                </p>
              </div>
            </>,
            <>
              <img src="/media/girlgloves.png" alt="" />
              <div>
                <h2>ExpressTest Launches at Gatwick Airport</h2>
                <small>
                  <GridColumnToRow
                    justify="space-between"
                    spacing={0}
                    array={[<>by Cignpost</>, <>on November 19th 2020</>]}
                  />
                </small>
                <p>
                  With lockdown 2.0 underway and the colder months approaching,
                  you may have questions around how you can keep yourself and
                  your loved ones safe this winter. Take a look at our guidance
                  and advice to ensure...
                </p>
              </div>
            </>,
            <>
              <img src="/media/hometest.jpg" alt="" />
              <div>
                <h2>ExpressTest Launches at Gatwick Airport</h2>
                <small>
                  <GridColumnToRow
                    justify="space-between"
                    spacing={0}
                    array={[<>by Cignpost</>, <>on November 19th 2020</>]}
                  />
                </small>
                <p>
                  With rapid testing continuing to play a vital role in
                  preventing the spread of COVID-19 and following the successful
                  launch of Cignpost Diagnostics Limited’s screening centres
                  within the UK, ExpressTest are conducting a pilot for home
                  testing kits
                </p>
              </div>
            </>,
          ]}
        />
      </Container>
    </SectionLightBg>
  );
};

export default BlogOverview;
