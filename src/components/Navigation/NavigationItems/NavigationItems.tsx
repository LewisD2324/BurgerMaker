import React from "react";
import classes from "./navigationitems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

interface NavigationItemsPropTypes {
  children?: React.ReactNode;
}

const navigationitems = (props: NavigationItemsPropTypes) => (
  <ul className={classes.Navigationitems}>
    <NavigationItem link="/" active={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Checkout
    </NavigationItem>
  </ul>
);

export default navigationitems;
