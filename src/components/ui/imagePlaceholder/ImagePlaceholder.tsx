import Box from '@mui/material/Box';
import ImageIcon from '@mui/icons-material/Image';
import { styles } from './ImagePlaceholder.styles';

export const ImagePlaceholder = () => {
  return (
    <Box sx={styles.imagePlaceholder}>
      <ImageIcon />
    </Box>
  );
};
