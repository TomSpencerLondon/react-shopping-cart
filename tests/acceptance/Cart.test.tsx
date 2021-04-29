import * as React from 'react';
import {CartItem} from "../../src/CartItem/data/CartItem";
import {createFakeCartItem} from "../helpers/factories/CartItem";
import * as itemApi from '../../src/Item/api/getItems';
import {render, screen} from "@testing-library/react";
import App from "../../src/App";
import userEvent from "@testing-library/user-event";
const item1: CartItem = createFakeCartItem({id: 1});
const item2: CartItem = createFakeCartItem({id: 2});
const item3: CartItem = createFakeCartItem({id: 3});

jest.mock('react-query', () => ({ useQuery: () => ({ isLoading: false, data: [item1, item2, item3], }), }));


test('should be able to handle adding and removing items and getting the total', () => {
  // arrange
  // create items
  // create cart


  jest.spyOn(itemApi, "getItems").mockResolvedValue([item1, item2, item3]);

  // act
  // render the App
  // add 2 items to the cart
  // remove 1 item
  const { getByTestId } = render(<App />)
  userEvent.click(getByTestId('add-to-cart-button1'))
  userEvent.click(getByTestId('add-to-cart-button2'))

  // assert
  // the items expect in cart are in the cart - and the total is correct
  // expect(screen.getByText(/logout/i)).toBeInTheDocument()
});
