import { Product } from '../types/product';
import { SearchCriteria } from '../types/criteria';

type GetProductsProps = {
  args: SearchCriteria;
};

export const makeProductsURL = ({ category, price, sort }: GetProductsProps['args']) => {
  const url = `${process.env.NEXT_PUBLIC_HOST_NAME}/api/search`;

  const query = new URLSearchParams({
    ...(category ? { category } : undefined),
    ...(price?.from ? { priceFrom: price.from } : undefined),
    ...(price?.to ? { priceTo: price.to } : undefined),
    ...(sort ? { sort } : undefined),
  }).toString();

  if (query) {
    return `${url}?${query}`;
  }

  return url;
};

export const getProducts = async ({ args }: GetProductsProps): Promise<Array<Product>> => {
  return fetch(makeProductsURL({ ...args })).then((res) => res.json());
};
