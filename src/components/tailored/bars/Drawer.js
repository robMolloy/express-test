import React from "react";

import MUIDrawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MUIDivider from "@material-ui/core/Divider";

import allListItems from "./allListItems";
import NavLinkList from "./NavLinkList";

const Drawer = (props = {}) => {
  let side, state, toggleDrawer;
  ({ side = "left", state, toggleDrawer, ...props } = props);

  const classes = makeStyles({ list: { width: 250 } })();

  return (
    <MUIDrawer anchor={side} open={state} onClose={toggleDrawer}>
      <div
        className={classes.list}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        {...props}
      >
        {allListItems.map((listItemGroup, j) => (
          <>
            <NavLinkList {...{ toggleDrawer }} array={listItemGroup} />
            {j === allListItems.length - 1 ? "" : <MUIDivider />}
          </>
        ))}
      </div>
    </MUIDrawer>
  );
};

export default Drawer;
