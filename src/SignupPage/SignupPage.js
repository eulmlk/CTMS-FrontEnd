// SignupPage.js

import React, { useState } from "react";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";
import appName from "../Globals";
import axios from "axios";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

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

    // Make a POST request
    axios
      .post(
        "https://localhost:5000/api/v1/users/signup",
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
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Button variant="contained">Log In</Button>
        </Grid>
        <Grid item xs={12}>
          <div>
            <img src="" alt="" />
            <Typography variant="h1">{appName}</Typography>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">Sign Up</Typography>
          <form onSubmit={(event) => signUpRequest(event)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="First name*"
                  onChange={(event) => setFirstName(event.target.value)}
                  type="text"
                  value={firstName}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  placeholder="Last name*"
                  onChange={(event) => setLastName(event.target.value)}
                  type="text"
                  value={lastName}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Email address*"
                  type="email"
                  value={email}
                  required
                  onChange={(event) => setEmail(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Password*"
                  type="password"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Confirm password*"
                  type="password"
                  value={password2}
                  required
                  onChange={(event) => setPassword2(event.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Create Account
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUpPage;
