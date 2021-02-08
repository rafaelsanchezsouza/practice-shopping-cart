import CartItem from "../CartItem/CartItem";
import { Wrapper } from "./Cart.styles";
import { CartItemType } from "../App";
import React from "react";
import PropTypes from "prop-types";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce(
      (accumulator: number, item) => accumulator + item.amount * item.price,
      0
    );

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.any,
  addToCart: PropTypes.any,
  removeFromCart: PropTypes.any,
};

export default Cart;
