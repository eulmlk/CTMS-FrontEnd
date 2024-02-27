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
import { useNavigate } from "react-router-dom";

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

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validate = () => {
    if (password.length < 8) {
      alert("Password must contain at least 8 characters!!");
      return false;
    }

    if (password !== password2) {
      alert("Passwords do not match!!");
      return false;
    }

    return true;
  };

  const signUpRequest = (event) => {
    event.preventDefault();

    if (!validate()) return;

    axios
      .post(
        "http://localhost:5000/api/v1/users/signup",
        {
          firstName: firstName,
          lastName: lastName,
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
        setMessage("Account Created successfully");
        setError(false);
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
        <Button
          variant="contained"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
          sx={{
            borderRadius: "20px",
            bgcolor: "#579DFF",
            fontFamily: "Roboto",
            fontWeight: "bold",
            fontSize: "20px",
            textTransform: "none",
          }}
          onClick={() => navigate("/login")}
        >
          Log In
        </Button>
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
                Sign Up
              </Typography>
            </Box>
            <form onSubmit={(event) => signUpRequest(event)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    placeholder="First name*"
                    onChange={(event) => setFirstName(event.target.value)}
                    type="text"
                    value={firstName}
                    required
                    fullWidth
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    size="small"
                    placeholder="Last name*"
                    onChange={(event) => setLastName(event.target.value)}
                    type="text"
                    value={lastName}
                    required
                    fullWidth
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <TextField
                    size="small"
                    placeholder="Confirm password*"
                    type="password"
                    value={password2}
                    required
                    onChange={(event) => setPassword2(event.target.value)}
                    fullWidth
                    inputProps={{ style: { color: "white" } }}
                  />
                </Grid>
                <Grid container justifyContent="center" paddingTop="20px">
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
                    Create Account
                  </Button>
                </Grid>
                {message && (
                  <Grid item xs={12}>
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

export default SignUpPage;
