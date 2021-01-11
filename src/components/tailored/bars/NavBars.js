import React from "react";
import SideBar from "../../generic/navigation/SideBar";
import HeaderBar from "../../generic/navigation/HeaderBar";

const NavBars = (props = {}) => {
  let drawerOpen;
  ({ drawerOpen = false, ...props } = props);

  const [drawerState, setDrawerState] = React.useState(drawerOpen);
  const toggleDrawer = () => setDrawerState(!drawerState);

  return (
    <>
      <HeaderBar imgSrc="media/ExpressTest-logo-01.svg" />

      <SideBar state={drawerState} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBars;
