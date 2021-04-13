import {CartItemType} from "../../App";
import fetch from "isomorphic-unfetch";
export const getItems = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();
