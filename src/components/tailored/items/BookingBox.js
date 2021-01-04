import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Button from "../../generic/buttons/ButtonSecondary";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.spacing(2),
  },
  container: {
    display: "flex",
    flexDirection: "column",
    height: theme.spacing(20),
    minHeight: theme.spacing(20),
    paddingBottom: theme.spacing(1),
  },
  heading: { flexGrow: "1", color: "#FFFFFF" },
}));

const BookingBox = (props = {}) => {
  let children, className;
  ({ children, className = "" } = props);

  const classes = useStyles();

  return (
    <div className={`${className} ${classes.root}`}>
      <div className={classes.container}>
        <Title size="1" className={classes.heading}>
          {children}
        </Title>
        <div>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default BookingBox;
