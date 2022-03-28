import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useMounted } from 'hooks/useMounted';
import { styles } from './AdBanner.styles';

export const AdBanner = () => {
  const [shouldRenderAd, setShouldRenderAd] = useState(false);

  const isMounted = useMounted();

  setTimeout(() => {
    if (isMounted.current) {
      setShouldRenderAd(true);
    }
  }, 3000);

  return shouldRenderAd ? <Box sx={styles.adBanner}>Ad Banner</Box> : <Box sx={styles.adBannerPlaceholder} />;
};
