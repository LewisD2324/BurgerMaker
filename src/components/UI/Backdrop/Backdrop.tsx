import React from "react";
import classes from "./backdrop.module.css";
interface BackdropPropTypes {
  show: boolean;
  onClick(): void;
}

const backdrop = (props: BackdropPropTypes) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.onClick}></div>
  ) : null;

export default backdrop;
