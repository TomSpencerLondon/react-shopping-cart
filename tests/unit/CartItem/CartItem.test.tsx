import React from 'react';
import CartItem from '../../../src/CartItem/CartItem';
import { render, screen } from "@testing-library/react";
import { CartItemType } from "../../../src/App";
import userEvent from "@testing-library/user-event";
import Item from "../../../src/Item/Item";

describe('CartItem', () => {
  it('renders the item title', () => {
    // arrange
    const item: CartItemType = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();

    // act
    render(<CartItem item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)

    // assert
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it('can add to the cart', () => {
    // arrange
    const item: CartItemType = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    render(<CartItem item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)

    // act
    userEvent.click(screen.getByText('+'))

    // assert
    expect(addToCart).toBeCalledWith(item);
  });

  it('can remove from the cart', () => {
    // arrange
    const item: CartItemType = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    render(<CartItem item={item} addToCart={addToCart} removeFromCart={removeFromCart} />)

    // act
    userEvent.click(screen.getByText('-'))

    // assert
    expect(removeFromCart).toBeCalledWith(item.id);
  });
});