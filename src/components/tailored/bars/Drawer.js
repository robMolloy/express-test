import React from "react";

// import MUIDrawer from "@material-ui/core/Drawer";
// import makeStyles from "@material-ui/core/styles/makeStyles";
// import MUIDivider from "@material-ui/core/Divider";

// import allListItems from "./allListItems";
// import config from "../../../config";
// import NavLinkList from "./NavLinkList";
import Sidebar from "../../generic/navigation/Sidebar";

// const getGroupedListItems = () => {
//   let rtn = [];

//   config.pages.forEach((pageData) => (rtn[pageData.order] = []));
//   config.pages.forEach((pageData) => rtn[pageData.order].push(pageData));

//   return rtn;
// };

const Drawer = (props = {}) => {
  return <Sidebar {...props} />;
};

export default Drawer;
