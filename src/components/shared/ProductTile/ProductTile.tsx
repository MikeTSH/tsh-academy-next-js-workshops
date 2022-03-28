import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

import { Image } from '../../ui/Image';
import { Product } from '../../../types/product';
import { Link } from '../../ui/Link';
import { routing } from '../../../lib/routing';
import { styles } from './ProductTile.styles';

type ItemTileProps = {
  product: Product;
  productKey?: number;
};

export const ProductTile = ({ product, productKey }: ItemTileProps) => {
  return (
    <Card sx={styles.productCard}>
      <Link href={routing.product(product.id)} sx={styles.productCardWrapper}>
        <Box sx={styles.productCardImage}>
          <Image src={product.image} alt={product.title} sizes={'503px'} />
        </Box>
      </Link>
      <CardContent sx={styles.productCardContent}>
        <Link href={routing.product(product.id)}>
          <Typography gutterBottom variant="h6" component="h2">
            {product.title}
          </Typography>
        </Link>
        <Typography>{product.description.substring(0, 70)} ...</Typography>
        <Box>
          <Typography sx={styles.productCardRating}>
            <StarIcon sx={styles.productCardRatingStart} />
            {product.rating.rate}
          </Typography>
          <Typography sx={styles.productCardPrice}>${product.price}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
