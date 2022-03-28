import React from 'react';
import type { NextPage } from 'next';
import { Home } from '../src/components/page/Home/Home';
import { Product } from '../src/types/product';
import { getTopProducts } from '../src/lib/getTopProducts';
import { MetaTags } from '../src/components/shared/MetaTags/MetaTags';
import { routing } from '../src/lib/routing';

type HomePageProps = {
  topProducts: Array<Product>;
};

const Homepage: NextPage<HomePageProps> = ({ topProducts }) => (
  <>
    <MetaTags config={{ title: 'Awesome store', url: routing.homepage, description: 'Awesome store' }} />
    <Home topProducts={topProducts} />
  </>
);

export const getStaticProps = async () => ({
  props: { topProducts: await getTopProducts() },
});

export default Homepage;
