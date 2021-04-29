import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

// Styles
import { Wrapper } from './Item.styles';
import {CartItem} from "../CartItem/data/CartItem";

type Props = {
  item: CartItem;
  handleAddToCart: (clickedItem: CartItem) => void;
};

const Item: FC<Props> = ({ item, handleAddToCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button data-testid={`add-to-cart-button${item.id}`} onClick={() => handleAddToCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
