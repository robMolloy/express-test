import React from "react";
// import Drawer from "./Drawer";
import Toolbar from "./Toolbar";
import Sidebar from "../../generic/navigation/Sidebar";

const NavBars = (props = {}) => {
  let drawerOpen;
  ({ drawerOpen = false, ...props } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <Toolbar toggleDrawer={toggleDrawer} />
      <Sidebar state={drawerState} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBars;
