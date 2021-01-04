import React from "react";
import Drawer from "./Drawer";
import Toolbar from "./Toolbar";

const NavBars = (props = {}) => {
  let drawerOpen;
  ({ drawerOpen = false, ...props } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <Toolbar toggleDrawer={toggleDrawer} />
      <Drawer state={drawerState} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBars;
