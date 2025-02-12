import React, { Component } from "react";
import classes from "./modal.module.css";
import Aux from "../../../hoc/Auxilary";
import Backdrop from "../Backdrop/Backdrop";

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  modalClosed(): void;
}

class Modal extends Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  shouldComponentUpdate(nextProps: ModalProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <Aux>
        <Backdrop onClick={this.props.modalClosed} show={this.props.show} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? 1 : 0
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
