import { Product } from '../types/product';

export const makeRelatedProductsURL = (category: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}products/category/${category}/?limit=4`;

export const getRelatedProducts = async ({ args }: { args: { category: string } }): Promise<Array<Product>> => {
  return fetch(makeRelatedProductsURL(args.category)).then((res) => res.json());
};
