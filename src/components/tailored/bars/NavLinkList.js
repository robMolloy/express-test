import React from "react";

import MUIList from "@material-ui/core/List";

import ListItem from "./ListItem";

const NavLinkList = (props = {}) => {
  let array;
  ({ array = [], ...props } = props);

  return (
    <MUIList>
      {array.map((listItem, j) => (
        <ListItem key={j} item={listItem} />
      ))}
    </MUIList>
  );
};

export default NavLinkList;
