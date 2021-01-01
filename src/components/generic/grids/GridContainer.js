import React from "react";
import MUIGrid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      // maxWidth: "100%",
      // margin: `${theme.spacing(5)}px auto`,
    },
  };
});

const GridContainer = (props = {}) => {
  let children, className, spacing;
  ({ children, className = "", spacing = 5, ...props } = props);
  const classes = useStyles();

  return (
    <MUIGrid
      container
      className={`${className} ${classes.root}`}
      spacing={spacing}
      {...props}
    >
      {children}
    </MUIGrid>
  );
};

export default GridContainer;
