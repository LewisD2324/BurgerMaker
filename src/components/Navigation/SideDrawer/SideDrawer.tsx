import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilary";
import classes from "./sidedrawer.module.css";

interface SideDrawerProps {
  show: boolean;
  closeHandler(): void;
}

const sideDrawer = (props: SideDrawerProps) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.show} onClick={props.closeHandler} />
      <div className={attachedClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
