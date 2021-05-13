import * as React from 'react';
import {CartItem} from "../../src/CartItem/data/CartItem";
import {createFakeCartItem} from "../helpers/factories/CartItem";
import * as itemApi from '../../src/Item/api/getItems';
import {render, renderAct, screen} from "../helpers/utils/test-utils";
import App from "../../src/App";
import userEvent from "@testing-library/user-event";
import { waitFor } from "@testing-library/react";

test('should be able to handle adding and removing items and getting the total', async () => {
  // arrange
  // create items
  // create cart
  const item1: CartItem = createFakeCartItem({id: 1});
  const item2: CartItem = createFakeCartItem({id: 2});
  const item3: CartItem = createFakeCartItem({id: 3});


  jest.spyOn(itemApi, "getItems").mockResolvedValue([item1, item2, item3]);

  // act
  // render the App
  // add 2 items to the cart
  // remove 1 item
  await renderAct(<App />);

  await waitFor(() => {
    userEvent.click(screen.getByTestId('add-to-cart-button1'))
    userEvent.click(screen.getByTestId('add-to-cart-button2'))
  });
  // assert
  // the items expect in cart are in the cart - and the total is correct
  // expect(screen.getByText(/logout/i)).toBeInTheDocument()
});

test('should be able to login', async () => {
  // arrange
  // create items
  // create cart
  const item1: CartItem = createFakeCartItem({id: 1});


  jest.spyOn(itemApi, "getItems").mockResolvedValue([item1]);

  // act
  // render the App
  // add 2 items to the cart
  // remove 1 item
  await renderAct(<App />);

  userEvent.click(screen.getByTestId('add-to-cart-button1'))
  userEvent.click(screen.getByRole('button', {name: '1'}))
  userEvent.click(screen.getByRole('button', {name: 'login'}))

  expect(screen.getByText('Is logged in')).toBeInTheDocument();
});
