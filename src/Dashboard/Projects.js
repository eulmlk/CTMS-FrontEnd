import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useState } from "react";
import { Button } from "@mui/material";
import ProjectsTasks from "./ProjectTasks";

const Projects = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [projects, setProjects] = useState([]);
  const [projIndex, setProjIndex] = useState(-1);

  const createProject = () => {
    axios
      .post(
        "http://localhost:5000/api/v1/projects/create",
        {
          projectName: "Project-" + (projects.length + 1),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setMessage("Project created successfully");
        setError(false);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
          console.log(error.response.data.message);
          setError(true);
        } else {
          setMessage("An error occurred while processing your request");
          setError(true);
          console.error("Error:", error);
        }
      });
  };

  const getProjects = () => {
    // axios
    //   .get("http://localhost:5000/api/v1/projects/")
    //   .then((response) => {
    //     setProjects(response.data.projects);
    //   })
    //   .catch((error) => {
    //     if (error.response) {
    //       setMessage(error.response.data.message);
    //       console.log(error.response.data.message);
    //       setError(true);
    //     } else {
    //       setMessage("An error occurred while processing your request");
    //       setError(true);
    //       console.error("Error:", error);
    //     }
    //   });

    setProjects([
      {
        _id: "65c7e78e9237bf7b2660da14",
        user: {
          _id: "65c7dab8d8f4bef0915087aa",
          firstName: "Naod",
          lastName: "Ararsa",
          email: "naodararsa7@gmail.com",
        },
        project: {
          _id: "65c7e78e9237bf7b2660da12",
          projectName: "Project-1",
          createdAt: "2024-02-10T21:13:33.021Z",
        },
        role: "admin",
      },
      {
        _id: "65c7e8f337fe12d58af3503e",
        user: {
          _id: "65c7dab8d8f4bef0915087aa",
          firstName: "Naod",
          lastName: "Ararsa",
          email: "naodararsa7@gmail.com",
        },
        project: {
          _id: "65c7e8f337fe12d58af3503c",
          projectName: "updated-project",
          createdAt: "2024-02-10T21:21:14.898Z",
        },
        role: "admin",
      },
    ]);
  };

  useEffect(() => {
    getProjects();
  }, []);

  const ProjectList = () => {
    return (
      <Box display="flex" flexDirection="column">
        <Box display="flex" alignItems="center">
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Projects
          </Typography>
          <IconButton color="primary" onClick={() => createProject()}>
            <AddIcon />
          </IconButton>
        </Box>
        {projects.map((project, index) => (
          <Box
            display="flex"
            sx={{ bgcolor: "#22272B", margin: 1, padding: 1 }}
          >
            <Button
              fullWidth
              style={{
                padding: 10,
                justifyContent: "flex-start",
                fontSize: 20,
              }}
              sx={{
                color: "white",
                "&:hover": { color: "#000" },
                textTransform: "none",
              }}
              onClick={() => setProjIndex(index)}
            >
              {project.project.projectName}
            </Button>
          </Box>
        ))}
      </Box>
    );
  };

  return projIndex == -1 ? (
    <ProjectList />
  ) : (
    <ProjectsTasks proj={projects[projIndex]} />
  );
};

export default Projects;
