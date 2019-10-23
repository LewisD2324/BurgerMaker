import React, { Component } from "react";
import { Link } from "react-router-dom";
import Aux from "../../../hoc/Auxilary";
import { IngredientsType } from "../../../containers/BurgerBuilder/BurgerBuilder";
import Button from "../../UI/Button/Button";

interface OrderSummaryPropTypes {
  ingredients: IngredientsType;
  purchaseCancelHandler(): void;
  // purchaseContinueHandler(): void;
  price: number;
}

class OrderSummary extends Component<OrderSummaryPropTypes> {
  componentWillUpdate() {
    console.log("componentupdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey} </span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });
    return (
      <Aux>
        <h3> Your Order </h3>
        <p>Burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price:{this.props.price.toFixed(2)}</strong>{" "}
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" onClick={this.props.purchaseCancelHandler}>
          Cancel
        </Button>
        <Link to="/checkout">Continue</Link>
      </Aux>
    );
  }
}

export default OrderSummary;
