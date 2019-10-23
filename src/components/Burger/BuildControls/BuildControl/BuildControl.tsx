import React, { MouseEvent } from "react";
import classes from "./buildcontrol.module.css";
import { HtmlAttributes } from "csstype";

export interface PropTypes {
  label: string;
  added: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  removed: (ev: React.MouseEvent<HTMLButtonElement>) => void;

  disabled: boolean;
}

const buildControl = (props: PropTypes) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>>
    <button
      className={classes.More}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.Less} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
