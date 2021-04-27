import faker from "faker";
import {CartItem} from "../../../src/CartItem/data/CartItem";

export const createFakeCartItem = (cartItem?: Partial<CartItem>): CartItem => {
 return {
   amount: 0,
   category: faker.company.catchPhrase(),
   description: faker.lorem.sentence(),
   id: 0,
   image: faker.image.fashion(),
   price: faker.random.number(100),
   title: faker.company.bsNoun(),
   ...cartItem,
 }
}
