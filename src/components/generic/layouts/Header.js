import React from "react";
import SectionAlert from "../../generic/sections/SectionAlert";
import SectionDarkBg from "../../generic/sections/SectionDarkBg";
import makeStyles from "@material-ui/styles/makeStyles";
import Container from "../../generic/containers/Container";

const useStyles = makeStyles((theme) => ({
  root: { textAlign: "left" },
  title: { margin: "0" },
  sub: { textAlign: "left" },
}));

const Header = (props = {}) => {
  let children;
  ({ children } = props);
  const classes = useStyles();

  return (
    <>
      <SectionDarkBg className={classes.root}>
        <Container>
          <br />
          <h1 className={classes.title}>{children}</h1>
          <br />
        </Container>
      </SectionDarkBg>
      <SectionAlert className={classes.sub}>
        <Container>{children}</Container>
      </SectionAlert>
    </>
  );
};

export default Header;
