import { Product } from '../types/product';

export const makeTopProductsURL = `${process.env.NEXT_PUBLIC_API_URL}products?limit=3`;

export const getTopProducts = async (): Promise<Array<Product>> => {
  return fetch(makeTopProductsURL).then((res) => res.json());
};
