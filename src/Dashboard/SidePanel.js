import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const SidePanel = ({ isOpen, onClose, container }) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      container={container}
      variant="persistent"
    >
      <List>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidePanel;
