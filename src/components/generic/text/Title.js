import React from "react";

const Title = (props = {}) => {
  let children, size;
  ({ children, size = 0 } = props);

  let ComponentOptions = { 0: "h1", 1: "h2", 2: "h4" };
  let Component = ComponentOptions[size];

  return <Component>{children}</Component>;
};

export default Title;
