import React from 'react';
import type { NextPage, GetServerSidePropsContext } from 'next';
import { getCategories } from '../../../src/lib/getCategories';
import { Search } from '../../../src/components/page/Search/Search';
import { MetaTags } from '../../../src/components/shared/MetaTags/MetaTags';
import { Product } from '../../../src/types/product';
import { getProducts } from '../../../src/lib/getProducts';
import { searchUrlToCriteria } from '../../../src/lib/searchUrlToCriteria';
import { SearchCriteria } from '../../../src/types/criteria';
import { routing } from '../../../src/lib/routing';

type SearchPageProps = {
  categories: Array<string>;
  criteria: SearchCriteria;
  products: Array<Product>;
};

const SearchPage: NextPage<SearchPageProps> = ({ categories, criteria, products }) => (
  <>
    <MetaTags
      config={{
        title: `${criteria.category} products`,
        url: routing.search(criteria.category),
        description: `${criteria.category} products`,
      }}
    />
    <Search categories={categories} criteria={criteria} products={products} />
  </>
);

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const criteria = searchUrlToCriteria(context.query);

  return {
    props: {
      categories: await getCategories(),
      criteria,
      products: await getProducts({ args: criteria }),
    },
  };
};

export default SearchPage;
