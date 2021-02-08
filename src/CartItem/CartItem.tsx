import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from "prop-types";

import { CartItemType } from "../App";

import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clcickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.title}</h3>
      <div className="information">
        <p>Price: R${item.price}</p>
        <p>Total: R${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className="buttons">
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size="small"
          disableElevation
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.image} alt={item.title} />
  </Wrapper>
);

CartItem.propTypes = {
  item: PropTypes.any,
  addToCart: PropTypes.any,
  removeFromCart: PropTypes.any,
};

export default CartItem;
