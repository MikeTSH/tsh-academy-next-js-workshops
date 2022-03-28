import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styles } from './Footer.styles';

export const Footer = () => {
  return (
    <Box component="footer" sx={styles.footerWrapper}>
      <Box sx={styles.footerContainer}>
        <Typography variant="h6" textAlign="center">
          Awesome store
        </Typography>
        <Box>
          <a href="https://tsh.io/" style={{ marginRight: '16px' }}>
            The Software House
          </a>
          <a href="https://tsh.io/pl/praca/" style={{ marginRight: '16px' }}>
            Rekrutacja
          </a>
          <a href="https://tsh.io/">Kontakt</a>
        </Box>
      </Box>
    </Box>
  );
};
