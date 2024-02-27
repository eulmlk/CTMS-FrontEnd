import React, { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useState } from "react";
import {
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Box,
} from "@mui/material";

const ProjectsTasks = ({ proj }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [project, setProject] = useState(proj);
  const [tasks, setTasks] = useState([]);

  return (
    <Paper style={{ maxWidth: 600, margin: "auto", padding: "16px" }}>
      <Box display="flex" alignItems="justify-content">
        <Typography variant="h4" gutterBottom>
          {project.project.projectName}
        </Typography>
        <Button
          style={{ marginBottom: "16px" }}
          variant="contained"
          color="primary"
        >
          Add Members
        </Button>
      </Box>
      <Typography variant="h6" gutterBottom>
        Tasks:
      </Typography>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ProjectsTasks;
