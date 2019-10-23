import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Redirect } from "react-router-dom";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1
    }
  };

  checkoutCancelledHandler = () => {};

  checkoutContinuedHandler = () => {
    return <Redirect to="/checkout/contract-data" />;
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          // checkoutCancelled = {this.checkoutCancelledHandler}
          // checkoutContinued = {this.checkoutContinuedHandler}
        />
        />
      </div>
    );
  }
}

export default Checkout;
