import React from 'react';
import Cart from "../../../src/Cart/Cart";
import * as CartItem from "../../../src/CartItem/CartItem";
import {CartItemType} from "../../../src/App";
import {render} from "@testing-library/react";
import Item from "../../../src/Item/Item";

describe('Cart', () => {
  it('renders the CartItems', () => {
    // arrange
    const item1: CartItemType = {amount: 1, category: "", description: "", id: 0, image: "", price: 5.0, title: "Item1"};
    const item2: CartItemType = {amount: 2, category: "", description: "", id: 1, image: "", price: 10.0, title: "Item2"};
    const addToCart = jest.fn();
    const removeFromCart = jest.fn();
    const cartItems: CartItemType[] = [item1, item2];
    const spyOnCartItem = jest.spyOn(CartItem, "default");

    // act
    render(<Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />)


    // assert
    cartItems.forEach((item) => expect(spyOnCartItem).toBeCalledWith({ item, addToCart, removeFromCart }, {} ));
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
