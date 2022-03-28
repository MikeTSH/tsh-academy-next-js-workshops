import { Product } from '../types/product';

export const makeProductURL = (id?: string) => `${process.env.NEXT_PUBLIC_API_URL}products/${id}`;

export const getProduct = async ({ args }: { args: { id?: string } }): Promise<Product> => {
  return fetch(makeProductURL(args.id)).then((res) => res.json());
};
