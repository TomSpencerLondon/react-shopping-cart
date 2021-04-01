import React from 'react';
import Item from '../../../src/Item/Item';
import {render, screen } from "@testing-library/react";
import {CartItemType} from "../../../src/App";

// extend to check for other things
describe('it works', () => {
  it('works', () => {
    // arrange
    const item: CartItemType = {amount: 0, category: "", description: "", id: 0, image: "", price: 0, title: "Title"};
    const handleAddToCart = jest.fn();

    // act
    render(<Item item={item} handleAddToCart={handleAddToCart}/>)

    // assert
    screen.getByText("Title");
  })
})
