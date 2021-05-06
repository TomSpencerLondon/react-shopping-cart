import React, { FC } from 'react';
import CartItemCard from '../CartItem/components/CartItemCard';
import { CartItem } from '../CartItem/data/CartItem';
import { Wrapper } from './Cart.styles';
import {useAuthContext} from "../Auth/providers/AuthContext";

type Props = {
  cartItems: CartItem[];
  addToCart: (clickedItem: CartItem) => void;
  removeFromCart: (id: number) => void;
};
// needs a spy on the cartItem:
//
const Cart: FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const { setToken } = useAuthContext();
  const calculateTotal = (items: CartItem[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      <button onClick={() => setToken("")}>login</button>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItemCard
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
