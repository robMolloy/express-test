import React from "react";
import TestCentreIntro from "../tailored/sections/TestCentreIntro";
import Header from "../generic/layouts/Header";
import BookingBoxes from "../tailored/sections/BookingBoxes";
import CheckBackSoon from "../tailored/sections/CheckBackSoon";

const TestCentres = () => {
  return (
    <>
      <Header>Book A Test</Header>
      <TestCentreIntro />
      <BookingBoxes />
      <CheckBackSoon />
    </>
  );
};

export default TestCentres;
