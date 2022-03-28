import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { Image } from '../../ui/Image';
import HomepageBanner from '../../../../public/homepage-banner.jpeg';
import { Link } from '../../ui/Link';
import { ProductTile } from '../../shared/ProductTile/ProductTile';
import { Product } from '../../../types/product';
import { routing } from '../../../lib/routing';
import { styles } from './Home.styles';

type HomeProps = {
  topProducts?: Product[];
};

export const Home = ({ topProducts }: HomeProps) => {
  return (
    <Box sx={styles.homeWrapper}>
      <Box sx={styles.bannerContainer}>
        <Box sx={styles.bannerPhoto}>
          <Image src="/homepage-banner.jpg" alt="Awesome store" sizes={'768px'} />
        </Box>
        <Box sx={styles.bannerContent}>
          <Typography variant="h3" textAlign="left" fontWeight="500">
            Buy awesome staff and make your day great
          </Typography>
          <Link sx={styles.bannerButton} href={routing.search(topProducts?.[0]?.category)}>
            Shop Now
          </Link>
        </Box>
      </Box>
      <Box sx={styles.listingWrapper}>
        <Typography variant="h4" textAlign="center" fontWeight="500">
          Top products
        </Typography>
        <Grid container sx={styles.productsGrid}>
          {topProducts?.map((product) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} sx={styles.item}>
              <ProductTile product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
