import React, {FC, useContext} from 'react';
import Button from '@material-ui/core/Button';

// Styles
import { Wrapper } from '../CartItem.styles';
import {CartItem} from "../data/CartItem";
import {useAuthContext} from "../../Auth/providers/AuthContext";

type Props = {
  item: CartItem;
  addToCart: (clickedItem: CartItem) => void;
  removeFromCart: (id: number) => void;
};

const CartItemCard: FC<Props> = ({ item, addToCart, removeFromCart }) => {
  const { token, isAuthenticated } = useAuthContext();
  return (
    <Wrapper>
      <div>
        <h3>{item.title}</h3>

        <h4>{isAuthenticated ? `Is logged in` : `Is not logged in` } </h4>
        <div className='information'>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className='buttons'>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
}

export default CartItemCard;
