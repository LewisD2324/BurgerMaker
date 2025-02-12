import React from "react";
import classes from "./burger.module.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

const burger = (props: any) => {
  //transforms state ingredient objects to arrays with keys
  let transformedIngredients: any = Object.keys(props.ingredients) // fix the any type
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
