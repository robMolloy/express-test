import React from "react";
import { TextField } from "@material-ui/core/";

const Input = (props = {}) => {
  // let ;
  ({ ...props } = props);

  return <TextField fullWidth size="medium" variant="outlined" {...props} />;
};

export default Input;
