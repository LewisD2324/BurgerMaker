import React from "react";
import classes from "./button.module.css";

interface ButtonPropTypes {
  onClick(): void;
  children?: React.ReactNode;
  btnType: string;
}

const button = (props: ButtonPropTypes) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default button;
