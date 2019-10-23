import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./buildcontrols.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

export interface DisabledInfoType {
  salad: boolean;
  bacon: boolean;
  cheese: boolean;
  meat: boolean;
  [key: string]: boolean;
}

export interface BuildControlsPropTypes {
  ingredientAdded(type: string): void;
  ingredientRemoved(type: string): void;
  disabled: DisabledInfoType;
  price: number;
  purchasable: boolean;
  ordered: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const buildControls = (props: BuildControlsPropTypes) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)} </strong>{" "}
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      Place an Order
    </button>
  </div>
);

export default buildControls;
