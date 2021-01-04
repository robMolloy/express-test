import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Title = (props = {}) => {
  let children, size, className, align, marginBottom;
  ({
    children,
    size = 0,
    className = "",
    align = "left",
    marginBottom = 0,
    ...props
  } = props);

  let ComponentOptions = ["h1", "h2", "h4"];
  let Component = ComponentOptions[size];

  const classes = makeStyles((theme) => ({
    root: { textAlign: align, marginBottom: theme.spacing(marginBottom) },
  }))();

  return (
    <Component className={`${className} ${classes.root}`}>{children}</Component>
  );
};

export default Title;
