import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { styles } from './SearchHader.styles';

type SearchHeaderProps = {
  category: string;
  itemsCount?: number;
  onSortChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  sortValue?: string | null;
};

export const SearchHeader = ({ category, itemsCount = 0, onSortChange, sortValue }: SearchHeaderProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.headerText}>
        <Typography variant="h5">Searching for “{category}”</Typography>
        <Typography variant="body1">{itemsCount} results found </Typography>
      </Box>
      <TextField select label="Sort" sx={styles.sortField} value={sortValue ?? ''} onChange={onSortChange}>
        <MenuItem value="" sx={styles.emptySort}></MenuItem>
        <MenuItem value="asc">Latest first</MenuItem>
        <MenuItem value="desc">Oldest first</MenuItem>
      </TextField>
    </Box>
  );
};
