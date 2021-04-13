import {getItems} from "../../../../src/Item/api/getItems";
// two types of javascript run times:
// 1. nodejs
// 2. browser
// nodejs has less tools than the browser - so it is missing:
// the window
// jest runs in nodejs
// nextjs runs some code on the server (pre-render) - SSR - server side rendering
// nextjs one run through of the function - renders the components and passes to client
// this is good for SSO: google webcrawlers do not run javascript => empty page
// request, axios, isomorphic unfetch -
describe('getItems', () => {
  it('returns requested items', async () => {
    // act
    const items = await getItems();
    console.log(items[1]);
    // assert
    expect(items[0].id).toEqual(expect.any(Number));
    expect(items[0]).toMatchObject({
      id: expect.any(Number),
      title: expect.any(String),
      price: expect.any(Number),
      description: expect.any(String),
      image: expect.any(String),
      amount: 0,
    })
  });
});
