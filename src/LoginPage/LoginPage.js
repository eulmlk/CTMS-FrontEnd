// LoginPage.js
import React, { useState } from "react";
import "./LoginPage.css"; // Import CSS file for styling
import appName from "../Globals.js";
import Button from "../UI/Button.js";

const LoginPage = () => {
  return (
    <div>
      <div>
        <img />
        <h1>{appName}</h1>
      </div>
      <div>
        <h2>Log In</h2>
        <form>
          <input placeholder="Username*" />
          <input placeholder="Password*" />
          <p>Create an Account</p>
          <p>Forgot Password?</p>
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
