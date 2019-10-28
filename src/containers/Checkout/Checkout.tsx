import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, RouteComponentProps } from "react-router-dom";
import { IProps } from "../BurgerBuilder/BurgerBuilder";
import ContactData from "./ContactData/ContactData";
class Checkout extends Component<RouteComponentProps> {
  state = {
    ingredients: null,
    price: 0,
    totalprice: 0
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients: any = ["", ""];
    let param: any;
    let price = 0;
    for (param of query.entries()) {
      //['salad', '1']
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ ingredients: ingredients, totalprice: price });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props: any) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalprice}
              {...props}
            />
          )}
        />
        />
      </div>
    );
  }
}

export default Checkout;
