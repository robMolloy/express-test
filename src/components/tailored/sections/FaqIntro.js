import React from "react";
import SectionBlockColor from "../../generic/sections/SectionBlockColor";
import Title from "../../generic/text/Title";
import Text from "../../generic/text/Text";
import { useTheme } from "@material-ui/styles";

const FaqIntro = () => {
  const theme = useTheme();

  return (
    <SectionBlockColor bg={theme.palette.grey.light}>
      <Title size="0" align="center">
        Frequently Asked Questions
      </Title>
      <Text align="center">Browse our frequently asked questions</Text>
    </SectionBlockColor>
  );
};

export default FaqIntro;
