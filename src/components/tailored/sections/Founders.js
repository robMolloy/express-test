import React from "react";

import SectionLightBg from "../../generic/sections/SectionLightBg";
import Container from "../../generic/containers/Container";
import GridColumnToRow from "../../generic/grids/GridColumnToRow";
import Tablet from "../../generic/layouts/Tablet";

import Text from "../../generic/text/Text";
import Title from "../../generic/text/Title";

const Founders = () => {
  return (
    <SectionLightBg>
      <Container>
        <GridColumnToRow
          array={[
            <Tablet imgSrc="media/about_founder1.png">
              <Title size="0">Denis Kinane</Title>
              <Text>
                Founder and Chief Medical Officer
                <br />
                <br />
                Denis has been in academia for 35 years serving in various
                capacities ranging from Professor to Dean in universities across
                Europe and the USA, including the Perelman School of Medicine
                (Penn), University of Penn (Ivy League), University of
                Louisville, Glasgow University and the University of Bern,
                Switzerland. Denis is Director of two large US and Chinese
                Health Companies and Scientific Director, CMO and Founder of
                several smaller international companies.
              </Text>
            </Tablet>,
            <Tablet imgSrc="media/about_founder2.png">
              <Title size="0">Steve Whatley</Title>
              <Text>
                Founder
                <br />
                <br />
                Steve is one of the founders of Cignpost Diagnostics and
                Cignpost Health. As CEO of Inchora, a UK based investment
                company, he has overseen the investment into companies in the UK
                such as Tenant Shop and Albany Park. He is also a Director of
                Neo Technologies and Metageni, which are both innovative data
                technology companies. Steve holds Fellowships with both the
                Royal Institute of Management and the RSA and Chairs the All
                Party Political Group Business in a Pandemic (Covid) world.
              </Text>
            </Tablet>,
            <Tablet imgSrc="media/about_founder3.png">
              <Title size="0">Nick Markham</Title>
              <Text>
                Founder
                <br />
                <br />
                Nick has extensive experience across the public, private and
                voluntary sectors. He is the Lead NED for the Department of Work
                & Pensions and chairs London & Continental Railways, owned by
                the Department for Transport. Previously he was the Lead
                Non-Executive Director for the Ministry of Housing and Local
                Government, and the Deputy Leader of Westminster Council. Nick
                is also founder of social enterprise charity, Safe Haven. He has
                also held senior strategy and finance roles with ITV and Laura
                Ashley.
              </Text>
            </Tablet>,
          ]}
        />
      </Container>
    </SectionLightBg>
  );
};

export default Founders;
