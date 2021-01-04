import React from "react";
import MUIListItem from "@material-ui/core/ListItem";
import MUIListItemIcon from "@material-ui/core/ListItemIcon";
import MUIListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";

const ListItem = (props = {}) => {
  let IconComponent, children;
  ({ IconComponent = MailIcon, children, ...props } = props);

  return (
    <MUIListItem button {...props}>
      <MUIListItemIcon>
        <IconComponent />
      </MUIListItemIcon>
      <MUIListItemText primary={children} />
    </MUIListItem>
  );
};

export default ListItem;
