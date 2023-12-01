import { color } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import classes from "./button.module.css";
const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.btn} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;