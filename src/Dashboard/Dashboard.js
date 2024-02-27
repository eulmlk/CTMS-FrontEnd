import React from "react";
import TopPanel from "./TopPanel";
import { Box, Grid, Button, Typography, IconButton } from "@mui/material";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import axios from "axios";
import Projects from "./Projects";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <TopPanel />
      <Box display="flex" flexGrow={1}>
        <Grid container>
          <Grid
            item
            xs={1.25}
            style={{ backgroundColor: "#393a38", padding: "16px" }}
          >
            <Button
              fullWidth
              variant="text"
              style={{ marginBottom: "8px" }}
              sx={{
                color: "white",
                "&:hover": { color: "#000" },
                textTransform: "none",
                overflow: "hidden",
              }}
            >
              Dashboard
            </Button>
            <Button
              fullWidth
              variant="text"
              style={{ marginBottom: "8px" }}
              sx={{
                color: "white",
                "&:hover": { color: "#000" },
                textTransform: "none",
                overflow: "hidden",
              }}
            >
              Settings
            </Button>
            <Button
              fullWidth
              variant="text"
              sx={{
                color: "white",
                "&:hover": { color: "#000" },
                textTransform: "none",
                overflow: "hidden",
                marginTop: 50,
              }}
            >
              Log Out
            </Button>
          </Grid>
          <Grid
            item
            xs={10.75}
            style={{
              backgroundColor: "#22272B",
              color: "#fff",
              padding: "16px",
            }}
          >
            <Grid
              item
              xs={10}
              style={{
                backgroundColor: "#393A38",
                color: "#fff",
                padding: "16px",
              }}
            >
              <Projects></Projects>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
