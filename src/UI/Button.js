// Button.js
import React, { useState } from "react";
import "./Button.css"; // Import CSS file for styling

const Button = ({ children, onClick, ...otherProps }) => (
  <button onClick={onClick} {...otherProps} className="Btns">
    {children}
  </button>
);

export default Button;
