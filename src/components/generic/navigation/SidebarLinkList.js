import React from "react";

import MUIList from "@material-ui/core/List";

import SidebarLink from "./SidebarLink";

const SidebarLinkList = (props = {}) => {
  let array;
  ({ array = [], ...props } = props);

  return (
    <MUIList>
      {array.map((pageData, j) => {
        const { Icon, path, name } = pageData;

        return <SidebarLink key={j} {...{ Icon, path, name }} />;
      })}
    </MUIList>
  );
};

export default SidebarLinkList;
