import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      color: "#FFFFFF",
    },
  };
});

const LightAnchor = (props = {}) => {
  let children, className;
  ({ children, className = "", ...props } = props);
  const classes = useStyles();

  return <Link className={`${classes.root} ${className}`}>{children}</Link>;
};

export default LightAnchor;
