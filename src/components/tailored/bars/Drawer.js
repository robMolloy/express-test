import React from "react";

import MUIDrawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MUIDivider from "@material-ui/core/Divider";

import allListItems from "./allListItems";
import NavLinkList from "./NavLinkList";

const getGroupedListItems = () => {
  let rtn = [];

  allListItems.forEach((listItem) => (rtn[listItem.order] = []));
  allListItems.forEach((listItem) => rtn[listItem.order].push(listItem));

  return rtn;
};

const Drawer = (props = {}) => {
  let side, state, toggleDrawer;
  ({ side = "left", state, toggleDrawer, ...props } = props);

  const classes = makeStyles({ list: { width: 250 } })();

  const groupedListItems = getGroupedListItems();

  return (
    <MUIDrawer anchor={side} open={state} onClose={toggleDrawer}>
      <div
        className={classes.list}
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        {...props}
      >
        {groupedListItems.map((listItemGroup, j) => (
          <React.Fragment key={j}>
            <NavLinkList {...{ toggleDrawer }} array={listItemGroup} />
            {j === groupedListItems.length - 1 ? "" : <MUIDivider />}
          </React.Fragment>
        ))}
      </div>
    </MUIDrawer>
  );
};

export default Drawer;
