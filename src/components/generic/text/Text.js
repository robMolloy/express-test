import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Text = (props = {}) => {
  let children, className, align;
  ({ children, className = "", align = "left", ...props } = props);

  const classes = makeStyles((theme) => ({
    root: { textAlign: align },
  }))();

  return (
    <p className={`${className} ${classes.root}`} {...props}>
      {children}
    </p>
  );
};

export default Text;
