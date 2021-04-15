import React from 'react';
import CartItemCard from '../../../src/CartItem/components/CartItemCard';
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import Item from "../../../src/Item/Item";
import {CartItem} from "../../../src/CartItem/data/CartItem";

describe('CartItemCard', () => {
  it('renders the item title', () => {
    // arrange
    const item: CartItem = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();

    // act
    render(<CartItemCard item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)

    // assert
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it('can add to the cart', () => {
    // arrange
    const item: CartItem = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    render(<CartItemCard item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)

    // act
    userEvent.click(screen.getByText('+'))

    // assert
    expect(addToCart).toBeCalledWith(item);
  });

  it('can remove from the cart', () => {
    // arrange
    const item: CartItem = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    render(<CartItemCard item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)

    // act
    userEvent.click(screen.getByText('-'))

    // assert
    expect(removeFromCart).toBeCalledWith(item.id);
  });
});
