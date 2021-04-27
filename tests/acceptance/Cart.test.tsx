import * as React from 'react';
import {CartItem} from "../../src/CartItem/data/CartItem";
import {createFakeCartItem} from "../helpers/factories/CartItem";
import * as itemApi from '../../src/Item/api/getItems';
import {render, screen} from "@testing-library/react";
import App from "../../src/App";
import userEvent from "@testing-library/user-event";
jest.mock('react-query', () => ({ useQuery: () => ({ isLoading: false, error: {}, data: [], }), }));

test('should be able to handle adding and removing items and getting the total', () => {
  // arrange
  // create items
  // create cart
  const item1: CartItem = createFakeCartItem();
  const item2: CartItem = createFakeCartItem();
  const item3: CartItem = createFakeCartItem();

  jest.spyOn(itemApi, "getItems").mockResolvedValue([item1, item2, item3]);

  // act
  // render the App
  // add 2 items to the cart
  // remove 1 item
  render(<App />)
  userEvent.click(screen.getByText('+'))

  // assert
  // the items expect in cart are in the cart - and the total is correct
  // expect(screen.getByText(/logout/i)).toBeInTheDocument()
});