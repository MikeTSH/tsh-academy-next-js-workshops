import { Product } from '../../src/types/product';
import { NextApiRequest, NextApiResponse } from 'next';
import { searchUrlToCriteria } from '../../src/lib/searchUrlToCriteria';

const priceFromFilter = (priceFrom: string) => (product: Product) => product.price >= parseFloat(priceFrom);
const priceToFilter = (priceTo: string) => (product: Product) => product.price <= parseFloat(priceTo);

const makeApiUrl = (category: string, sort?: string) =>
  `${process.env.NEXT_PUBLIC_API_URL}products/category/${category}${sort ? `?sort=${sort}` : ''}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, price, sort } = searchUrlToCriteria(req.query);

  if (!category) {
    res.status(500).json({ error: 'Search category is not defined' });
    return;
  }

  let filteredProducts = (await fetch(makeApiUrl(category, sort)).then((res) => res.json())) as Array<Product>;

  if (typeof price?.from !== 'undefined') {
    filteredProducts = filteredProducts.filter(priceFromFilter(price.from));
  }

  if (typeof price?.to !== 'undefined') {
    filteredProducts = filteredProducts.filter(priceToFilter(price.to));
  }

  res.status(200).json(filteredProducts);
}
