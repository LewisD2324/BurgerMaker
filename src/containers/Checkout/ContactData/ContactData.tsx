import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./contactData.module.css";
import { IngredientsType } from "../../BurgerBuilder/BurgerBuilder";
import axios from "../../../axios.orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
interface IContactDataProps {
  ingredients: IngredientsType | null;
  price: number;
  history: any[];
}

class ContactData extends Component<IContactDataProps> {
  state = {
    name: "",
    loading: false
  };

  orderHandler = () => {
    let event: any = {};
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "lewis",
        address: {
          street: "test 1",
          postcode: "Da3 8sf",
          country: "UK"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        //push back to starting page
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Your name"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="email"
          placeholder="Your email"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Your street"
        ></input>
        <input
          className={classes.Input}
          type="text"
          name="postal"
          placeholder="Your postal"
        ></input>
        <Button btnType="Success" onClick={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
