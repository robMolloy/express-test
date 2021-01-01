import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import MUIButton from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => {
  return {
    root: { color: "#FFFFFF" },
  };
});

const Button = (props = {}) => {
  let children, className;
  ({ children, className = "", ...props } = props);
  const classes = useStyles();

  return (
    <MUIButton
      variant="contained"
      className={`${classes.root} ${className}`}
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
