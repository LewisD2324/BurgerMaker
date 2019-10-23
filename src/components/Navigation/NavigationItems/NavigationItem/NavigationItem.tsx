import React from "react";
import classes from "./navigationitem.module.css";

interface NavigationitemPropTypes {
  children?: React.ReactNode;
  active: boolean;

  link: string;
}

const navigationitem = (props: NavigationitemPropTypes) => (
  <ul>
    <li className={classes.Navigationitem}>
      <a
        href={props.link}
        className={props.active ? classes.active : undefined}
      >
        {props.children}
      </a>
    </li>
  </ul>
);

export default navigationitem;
