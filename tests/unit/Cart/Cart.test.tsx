import React from 'react';
import Cart from "../../../src/Cart/Cart";
import * as CartItemCard from "../../../src/CartItem/components/CartItemCard";

import {render, screen} from "@testing-library/react";
import Item from "../../../src/Item/Item";
import {CartItem} from "../../../src/CartItem/data/CartItem";

describe('Cart', () => {
  it.only('renders the CartItems', () => {
    // arrange
    const item1: CartItem = {amount: 1, category: "", description: "", id: 0, image: "", price: 5.0, title: "Item1"};
    const item2: CartItem = {amount: 2, category: "", description: "", id: 1, image: "", price: 10.0, title: "Item2"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    const cartItems: CartItem[] = [item1, item2];
    const spyOnCartItem = jest.spyOn(CartItemCard, "default");

    // act
    render(<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />)

    screen.debug();

    // assert
    cartItems.forEach((item) => expect(spyOnCartItem).toBeCalledWith({ item, addToCart, removeFromCart }, {} ));
  });

  it('renders the correct amount', () => {
    // arrange
    const item1: CartItem = {amount: 1, category: "", description: "", id: 0, image: "", price: 5.0, title: "Item1"};
    const item2: CartItem = {amount: 2, category: "", description: "", id: 1, image: "", price: 10.0, title: "Item2"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    const cartItems: CartItem[] = [item1, item2];
    const spyOnCartItem = jest.spyOn(CartItemCard, "default");

    // act
    render(<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />)


    // assert
    expect(screen.getByText('Total: $25.00')).toBeInTheDocument();
  });
});

// render cartItem and make sure amount is right price.
//

// const tracks = [createFakeTrack(), createFakeTrack()];
// const spyOnTrackCard = jest.spyOn(TrackCard, "default");
//
// describe("TrackCardsContainer", () => {
//   it("should render each Track as a card", () => {
//     render(<TrackCardsContainer tracks={tracks} />);
//
//     tracks.forEach((track) => expect(spyOnTrackCard).toHaveBeenCalledWith({ track }, expect.anything()));
//   });
// });
