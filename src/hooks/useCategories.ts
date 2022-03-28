import useSWR from 'swr';
import { getCategories, makeCategoriesURL } from '../lib/getCategories';

type UseCategoriesProps = {
  categories?: Array<string>;
};

export const useCategories = ({ categories }: UseCategoriesProps = {}) => {
  const { data } = useSWR(makeCategoriesURL, getCategories, categories ? { fallbackData: categories } : undefined);

  return { data };
};
