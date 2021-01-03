import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // textAlign: "left",
    },
  };
});

const Text = (props = {}) => {
  let children, className;
  ({ children, className, ...props } = props);

  const classes = useStyles();

  return (
    <p className={`${className} ${classes.root}`} {...props}>
      {children}
    </p>
  );
};

export default Text;
