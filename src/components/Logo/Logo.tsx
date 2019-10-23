import React from "react";
import BurgerLogo from "../../assets/images/burger-logo.png";
import classes from "./logo.module.css";

const Logo = (props: any) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={BurgerLogo} alt="MyBurger"></img>
  </div>
);

export default Logo;
