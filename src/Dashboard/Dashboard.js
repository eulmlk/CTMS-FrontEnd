// LoginPage.js
import React, { useState } from "react";
import "./Dashboard.css"; // Import CSS file for styling
import appName from "../Globals.js";
import Button from "../UI/Button.js";

const Dashboard = () => {
  return (
    <div>
      <div class="NavBar">
        {/* Logo */}
        <img />

        <h1>{appName}</h1>
        <input type="search" placeholder="Search..."></input>

        {/* Notifications */}
        <img />

        {/* Settings */}
        <img />

        {/* Profile */}
        <img />
      </div>
      <div class="SidePanel">
        <div>
          <img />
          Dashboard
        </div>
        <div>
          <img />
          Projects
          <img />
        </div>
        <div>
          <img />
          Settings
        </div>

        <div>
          <img />
          Log out
        </div>
      </div>
      <div class="Main">
        <hi>Projects</hi>
        <img />
        <div class="Projects">
          <div class="Proj">
            <img />
            <div class="ProjDesc">
              <h2>Project One</h2>
              <p>This is a description for project one</p>
            </div>
          </div>
          <div class="Proj">
            <img />
            <div class="ProjDesc">
              <h2>Project Two</h2>
              <p>This is a description for project two</p>
            </div>
          </div>
          <div class="Proj">
            <img />
            <div class="ProjDesc">
              <h2>Project Three</h2>
              <p>This is a description for project three</p>
            </div>
          </div>
          <div class="Proj">
            <img />
            <div class="ProjDesc">
              <h2>Project Four</h2>
              <p>This is a description for project four</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
