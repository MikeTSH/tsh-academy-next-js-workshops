import useSWR from 'swr';
import { Product } from '../types/product';
import { getProducts } from '../lib/getProducts';
import { SearchCriteria } from '../types/criteria';

type UseProductsProps = SearchCriteria & {
  products: Array<Product>;
};

export const useProducts = ({ category, price, sort, products }: UseProductsProps) => {
  const response = useSWR({ args: { category, price, sort } }, getProducts, { fallbackData: products });

  if (!('isLoading' in response)) {
    Object.defineProperty(response, 'isLoading', {
      get() {
        return response.data === undefined;
      },
      enumerable: true,
    });
  }

  return response as typeof response & { isLoading: boolean };
};
