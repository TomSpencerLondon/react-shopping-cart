import fetch from "isomorphic-unfetch";
import {CartItem} from "../../CartItem/data/CartItem";

// Anti corruption layer - on line 7 - transforming result into what we want
export const getItems = async (): Promise<CartItem[]> => {
  const result = await (await fetch('https://fakestoreapi.com/products')).json();
  return result.map((item: any) => {
    return {...item, amount: 0};
  });
}
