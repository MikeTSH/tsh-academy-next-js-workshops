import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Product } from '../../../types/product';
import { ProductTile } from '../../shared/ProductTile/ProductTile';
import { useProducts } from '../../../hooks/useProducts';
import { SearchFilters } from '../../shared/SearchFilters/SearchFilters';
import { SearchHeader } from '../../shared/SearchHeader/SearchHeader';
import { AdBanner } from '../../shared/AdBanner/AdBanner';
import { SearchCriteria } from '../../../types/criteria';
import { debounce } from '../../../lib/debounce';
import { styles } from './Search.styles';
import { ChangeEvent } from 'react';

type SearchProps = {
  categories: Array<string>;
  criteria: SearchCriteria;
  products: Array<Product>;
};

export const Search = ({ categories, criteria, products }: SearchProps) => {
  const router = useRouter();

  const { data: filteredProducts, isLoading } = useProducts({ ...criteria, products });

  const handleAttributeChange = debounce(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, queryName: string) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, [queryName]: event.target.value },
      });
    },
    250,
  );

  const handleSortChange = debounce((event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sort: event.target.value },
    });
  }, 250);

  return (
    <Box sx={styles.searchPage}>
      <AdBanner />
      <Box sx={styles.searchWrapper}>
        <SearchFilters categories={categories} price={criteria.price} onAttributeChange={handleAttributeChange} />
        <Box sx={styles.searchHeaderWrapper}>
          <SearchHeader
            category={criteria.category ?? ''}
            itemsCount={filteredProducts?.length}
            sortValue={criteria.sort}
            onSortChange={handleSortChange}
          />
          {isLoading ? (
            <Box sx={styles.searchProgressBar}>
              <CircularProgress />
            </Box>
          ) : (
            <Grid container>
              {filteredProducts?.map((product, key) => (
                <Grid key={product.id} item xs={12} sm={6} md={4} sx={styles.searchResultsGrid}>
                  <ProductTile product={product} productKey={key} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Box>
    </Box>
  );
};
