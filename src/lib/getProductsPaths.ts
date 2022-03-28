import { Product } from '../types/product';

export const makeProductsPathsURL = `${process.env.NEXT_PUBLIC_API_URL}products?limit=${process.env.NEXT_PUBLIC_PRODUCT_PATHS_LIMIT}`;

export const getProductsPaths = async () => {
  const products = (await fetch(makeProductsPathsURL).then((res) => res.json())) as Array<Product>;

  return products.map((product) => ({ params: { id: product.id.toString() } }));
};
