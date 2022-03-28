import React from 'react';
import Box from '@mui/material/Box';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { styles } from './Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={styles.layout}>
      <Header />
      <Box component="main" sx={styles.layoutContent}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
