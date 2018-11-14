import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Din bestilling</h3>
        <p>En nydelig burger med følgende ingredienser:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Totalpris: kr {this.props.price.toFixed(2)}</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          AVBRYT
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          FORTSETT
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
