import React, { Component, Key } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios.orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { Redirect, Link } from "react-router-dom";

const INGREDIENT_PRICES: IngredientsCostType = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};
interface IngredientsCostType {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [key: string]: number;
}

export interface IngredientsType {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
  [key: string]: number;
}
interface BurgerMakerState {
  ingredients: IngredientsType;
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
  loading: boolean;
  error?: string;
}
class BurgerBuilder extends Component {
  // constructor(props)
  // {
  //   super(props);
  //this.state = ...
  // }
  state: BurgerMakerState = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: undefined
  };

  componentDidMount() {
    axios
      .get("https://burgermaker-9e38e.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  updatePurchaseState(ingredients: IngredientsType) {
    //returns the array of ingredients iterating through the key values, and reducing them to 1 summed number (default value = 0)
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type: string) => {
    // const updatedIngredients = { ...this.state.ingredients };
    // updatedIngredients[topping]++;
    // const newPrice = this.state.totalPrice + INGREDIENT_PRICES[topping];

    const oldCount = this.state.ingredients[type];
    const updatedCounted = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type: string) => {
    const oldCount = this.state.ingredients[type];
    //
    if (oldCount <= 0) {
      return;
    }
    const updatedCounted = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCounted;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  // purchaseContinueHandler = () => {
  //   this.setState({ loading: true });
  //   const order = {
  //     ingredients: this.state.ingredients,
  //     price: this.state.totalPrice,
  //     customer: {
  //       name: "lewis",
  //       address: {
  //         street: "test 1",
  //         postcode: "Da3 8sf",
  //         country: "UK"
  //       },
  //       email: "test@test.com"
  //     },
  //     deliveryMethod: "fastest"
  //   };
  //   axios
  //     .post("/orders.json", order)
  //     .then(response => {
  //       this.setState({ loading: false, purchasing: false });
  //     })
  //     .catch(error => {
  //       this.setState({ loading: false, purchasing: false });
  //     });
  //   this.props.history.push();
  //   return <Redirect to="/checkout" />;
  //   console.log("test");
  //  <Link to="/checkout" />;
  // };
  render() {
    //disables buttons and sets state values to 0
    const disabledInfo: any = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }
    let burger = this.state.error ? (
      <p>Ingredients cant be loaded </p>
    ) : (
      <Spinner />
    );
    if (this.state.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchasingHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancelHandler={this.purchaseCancelHandler}
          //  purchaseContinueHandler={this.purchaseContinueHandler}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
