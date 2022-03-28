import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';

import { Image } from '../../ui/Image';
import { ProductTile } from '../../shared/ProductTile/ProductTile';
import { Product } from '../../../types/product';
import { styles } from './ProductDetails.styles';

type ProductDetailsProps = {
  product?: Product;
  relatedProducts?: Product[];
};

export const ProductDetails = ({ product, relatedProducts }: ProductDetailsProps) => {
  if (!product) {
    return null;
  }

  return (
    <Box sx={styles.productPage}>
      <Box sx={styles.productDetails}>
        <Box sx={styles.productPhoto}>
          <Image src={product.image} alt={product.title} key={product.image} priority={true} />
        </Box>
        <Box sx={styles.productInfo}>
          <Box sx={styles.productTextsArea}>
            <Typography variant="h4" fontWeight="500">
              {product.title}
            </Typography>
            <Typography variant="body1" textAlign="justify" sx={styles.productDescription}>
              {product.description}
            </Typography>
          </Box>
          <Box sx={styles.productActionArea}>
            <Box sx={styles.productValues}>
              <Typography variant="h4" sx={styles.productRating}>
                <StarIcon sx={styles.productRatingStar} />
                {product.rating.rate}
              </Typography>
              <Typography variant="h4" sx={styles.productPrice}>
                ${product.price}
              </Typography>
            </Box>
            <Button variant="contained" sx={styles.productBuyButton}>
              Buy
            </Button>
          </Box>
        </Box>
      </Box>
      {!!relatedProducts?.length && (
        <Box sx={styles.relatedProductsWrapper}>
          <Typography variant="h4" textAlign="center" fontWeight="500">
            Related products
          </Typography>
          <Grid container sx={styles.relatedProductsGrid}>
            {relatedProducts?.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3} sx={styles.relatedProductsItem}>
                <ProductTile product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};
