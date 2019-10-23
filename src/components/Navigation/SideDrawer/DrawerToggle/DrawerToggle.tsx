import React from "react";
import classes from "./drawertoggle.module.css";

const drawerToggle = (props: any) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}></div>
);

export default drawerToggle;
