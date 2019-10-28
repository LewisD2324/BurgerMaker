import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./navigationitem.module.css";

interface NavigationitemPropTypes {
  children?: React.ReactNode;
  //active: boolean;

  link: string;
}

const navigationitem = (props: NavigationitemPropTypes) => (
  <ul>
    <li className={classes.Navigationitem}>
      <NavLink to={props.link} exact activeClassName={classes.active}>
        {props.children}
      </NavLink>
    </li>
  </ul>
);

export default navigationitem;
