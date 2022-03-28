import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import { Link } from '../../ui/Link';
import { useCategories } from '../../../hooks/useCategories';
import { RangeFilter } from '../../../types/criteria';
import { routing } from '../../../lib/routing';
import { styles } from './SearchFilters.styles';

type SearchFiltersProps = {
  categories: Array<string>;
  price?: RangeFilter | null;
  onAttributeChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, queryName: string) => void;
};

export const SearchFilters = ({ categories, price, onAttributeChange }: SearchFiltersProps) => {
  const router = useRouter();
  const { data: availableCategories } = useCategories({ categories });

  return (
    <Box sx={styles.searchFiltersWrapper}>
      <FormControl>
        <FormLabel sx={styles.categoryLabel}>Category</FormLabel>
        {availableCategories?.map((category) => (
          <Link
            key={category}
            href={routing.search(category)}
            sx={
              category === router.query?.category
                ? { color: 'black', textDecoration: 'none', cursorPointer: 'none', cursor: 'initial' }
                : undefined
            }
          >
            {category}
          </Link>
        ))}
        <FormLabel sx={styles.priceLabel}>Price</FormLabel>
        <Box sx={styles.priceRangeWrapper}>
          <TextField
            defaultValue={price?.from ?? ''}
            type="number"
            size="small"
            sx={styles.priceFromField}
            placeholder="from"
            onChange={(event) => onAttributeChange(event, 'priceFrom')}
          />
          <TextField
            defaultValue={price?.to ?? ''}
            type="number"
            size="small"
            placeholder="to"
            onChange={(event) => onAttributeChange(event, 'priceTo')}
          />
        </Box>
      </FormControl>
    </Box>
  );
};
