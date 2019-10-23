import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./layout.module.css";
import ToolBar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
interface LayoutProps {
  children?: React.ReactNode;
}

interface LayoutState {
  showSideDrawer: boolean;
}

class Layout extends Component {
  constructor(props: LayoutProps) {
    super(props);
  }

  state: LayoutState = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => this.setState({ showSideDrawer: false });
  openDrawerHandler = () => {
    this.setState((prevState: LayoutState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <ToolBar openSideDrawerHandler={this.openDrawerHandler} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closeHandler={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
