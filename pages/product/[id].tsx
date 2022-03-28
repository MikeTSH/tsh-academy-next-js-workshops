import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { getProduct } from '../../src/lib/getProduct';
import { Product } from '../../src/types/product';
import { ProductDetails } from '../../src/components/page/ProductDetails/ProductDetails';
import { MetaTags } from '../../src/components/shared/MetaTags/MetaTags';
import { getRelatedProducts } from '../../src/lib/getRelatedProducts';
import { routing } from '../../src/lib/routing';

type ProductDetailsPageProps = {
  product?: Product;
  relatedProducts: Product[];
};

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = () => {
  const [{ product, relatedProducts }, setProductProps] = useState<ProductDetailsPageProps>({ relatedProducts: [] });
  const { query, push } = useRouter();

  useEffect(() => {
    (async () => {
      const product = await getProduct({ args: { id: query.id as string } });

      if (!product) {
        return push('/404');
      }

      const relatedProducts = await getRelatedProducts({ args: { category: product.category } });
      setProductProps({
        product,
        relatedProducts,
      });
    })();
  }, [push, query.id]);

  return (
    <>
      {product && (
        <MetaTags
          config={{
            title: product.title,
            url: routing.product(product.id),
            description: product.description,
            image: product.image,
          }}
        />
      )}
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </>
  );
};

export default ProductDetailsPage;
