import React from 'react';
import type { NextPage, GetStaticPropsContext } from 'next';
import { getProduct } from '../../src/lib/getProduct';
import { getProductsPaths } from '../../src/lib/getProductsPaths';
import { Product } from '../../src/types/product';
import { ProductDetails } from '../../src/components/page/ProductDetails/ProductDetails';
import { MetaTags } from '../../src/components/shared/MetaTags/MetaTags';
import { getRelatedProducts } from '../../src/lib/getRelatedProducts';
import { routing } from '../../src/lib/routing';

type ProductDetailsPageProps = {
  product: Product;
  relatedProducts: Product[];
};

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({ product, relatedProducts }) => (
  <>
    <MetaTags
      config={{
        title: product.title,
        url: routing.product(product.id),
        description: product.description,
        image: product.image,
      }}
    />
    <ProductDetails product={product} relatedProducts={relatedProducts} />
  </>
);

export const getStaticProps = async (context: GetStaticPropsContext<{ id?: string }>) => {
  const productId = context.params?.id;

  if (process.env.NODE_ENV === 'development' && productId === undefined) {
    throw new Error('Product Id not defined');
  }

  if (!productId || !Number.isInteger(+productId)) {
    return {
      notFound: true,
    };
  }

  const product = await getProduct({ args: { id: productId } });

  if (!product) {
    return {
      notFound: true,
    };
  }

  const relatedProducts = await getRelatedProducts({ args: { category: product.category } });

  return {
    props: {
      product,
      relatedProducts,
    },
    revalidate: +process.env.NEXT_PUBLIC_PRODUCT_REVALIDATION_PERIOD,
  };
};

export const getStaticPaths = async () => ({
  paths: await getProductsPaths(),
  fallback: 'blocking',
});

export default ProductDetailsPage;
