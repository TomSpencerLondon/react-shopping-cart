import React from 'react';
import Item from '../../../src/Item/Item';
import {render, screen } from "@testing-library/react";
import {CartItemType} from "../../../src/App";

// 1. extend to check for other things
// 2. react testing library user event click
// https://testing-library.com/docs/ecosystem-user-event/

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

// Possible code snippet from: https://testing-library.com/docs/ecosystem-user-event/
// example:
// import React from 'react'
// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
//
// test('click', () => {
//   render(
//     <div>
//       <label htmlFor="checkbox">Check</label>
//       <input id="checkbox" type="checkbox" />
//     </div>
//   )
//
//   userEvent.click(screen.getByText('Check'))
//   expect(screen.getByLabelText('Check')).toBeChecked()
// })
