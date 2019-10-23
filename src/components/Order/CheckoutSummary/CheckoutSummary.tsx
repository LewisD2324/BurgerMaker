import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./checkoutsummary.module.css";
import { Link } from "react-router-dom";

const checkoutSummary = (props: any) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Link to="/">CANCEL</Link>
      <Link to="/checkout/contact-data">CONTINUE</Link>
    </div>
  );
};

export default checkoutSummary;
