import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  TextField,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import logo from "../logo.svg";
import globals from "../Globals";

const TopPanel = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          bgcolor: "#393A38",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" style={{ width: 30, marginRight: 10 }} />
          <Typography variant="body" component="div" sx={{ mr: 2 }}>
            {globals.appName}
          </Typography>
        </div>

        {/* Right Section */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Search Bar */}
          <div style={{ position: "relative", marginRight: 10 }}>
            <InputBase
              placeholder="Search..."
              style={{ color: "#fff" }}
              sx={{
                "& input": {
                  "&::placeholder": {
                    color: "#fff",
                  },
                  color: "#fff",
                  border: "1px solid #fff",
                  "&:focus": {
                    borderColor: "#fff",
                  },
                },
              }}
            />
          </div>

          {/* Notification Bell */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Settings Button */}
          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>

          {/* Profile Picture */}
          <Avatar alt="User" src="/user-avatar.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopPanel;
