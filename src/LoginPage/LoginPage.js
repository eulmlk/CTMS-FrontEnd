import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import globals from "../Globals";
import axios from "axios";
import logo from "../logo.svg";
import { Link, useNavigate } from "react-router-dom";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#212C39",
          margin: "0px",
        },
        outlined: {
          "& fieldset": {
            borderColor: "red",
          },
          "&:hover fieldset": {
            borderColor: "blue",
          },
          "&.Mui-focused fieldset": {
            borderColor: "purple",
          },
        },
        input: {
          color: "white !important",
          "&::placeholder": {
            color: "white !important",
          },
        },
      },
    },
  },
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const loginRequest = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:5000/api/v1/users/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setMessage("Logged in successfully");
        setError(false);

        globals.userInfo = response.data.data.user;
        navigate(`/dashboard`);
      })
      .catch((error) => {
        if (error.response) {
          setMessage(error.response.data.message);
          setError(true);
        } else {
          setMessage("An error occurred while processing your request");
          setError(true);
          console.error("Error:", error);
        }
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" paddingBottom="20px">
            <img src={logo} alt="Logo" width="80px" />
            <Typography
              variant="h4"
              sx={{ fontFamily: "Roboto", fontWeight: "bold", color: "white" }}
            >
              {globals.appName}
            </Typography>
          </Box>

          <Box
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#1D2125",
              padding: "30px",
              paddingLeft: "60px",
              paddingRight: "60px",
              borderRadius: "20px",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              paddingBottom="20px"
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Login
              </Typography>
            </Box>
            <form onSubmit={(event) => loginRequest(event)}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                paddingTop="20px"
              >
                <Grid item xs={10}>
                  <TextField
                    size="small"
                    placeholder="Email address*"
                    type="email"
                    value={email}
                    required
                    onChange={(event) => setEmail(event.target.value)}
                    fullWidth
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid item xs={10}>
                  <TextField
                    size="small"
                    placeholder="Password*"
                    type="password"
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                    fullWidth
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid container justifyContent="center" paddingTop="20px">
                  <Grid item xs={10} padding="5px">
                    <Typography variant="body1" color="white">
                      <Link to="/signup">Create an account</Link>
                    </Typography>
                  </Grid>
                  <Button
                    sx={{
                      borderRadius: "20px",
                      bgcolor: "#579DFF",
                      fontFamily: "Roboto",
                      fontWeight: "bold",
                      fontSize: "20px",
                      textTransform: "none",
                    }}
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                </Grid>
                {message && (
                  <Grid item xs={10}>
                    <Typography
                      variant="body1"
                      color={error ? "error" : "white"}
                    >
                      {message}
                    </Typography>
                  </Grid>
                )}
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
