import React from 'react';
import Item from '../../../src/Item/Item';
import {render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";
import {CartItem} from "../../../src/CartItem/data/CartItem";

describe('Item', () => {
  it('renders the title', () => {
    // arrange
    const item: CartItem = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const handleAddToCart = jest.fn();

    // act
    render(<Item item={item} handleAddToCart={handleAddToCart}/>)

    // assert
    expect(screen.getByText("Title")).toBeInTheDocument();
  })

  it('should add an item to the cart', () => {
    // arrange
    const item: CartItem = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const handleAddToCart = jest.fn();
    render(<Item item={item} handleAddToCart={handleAddToCart}/>)

    // act
    userEvent.click(screen.getByText('Add to cart'))

    // assert
    expect(handleAddToCart).toBeCalledWith(item);
  })
});
