import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  homeWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 10%',
  },
  bannerContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    marginTop: { xs: '32px', md: '64px' },
    flexDirection: { xs: 'column', md: 'row' },
  },
  bannerPhoto: {
    width: { xs: '100%', md: '50%' },
    height: '400px',
    position: 'relative',
  },
  bannerContent: {
    display: 'flex',
    flex: 1,
    margin: { xs: '16px 0 0 0', md: '0 0 0 64px' },
    flexDirection: 'column',
  },
  bannerButton: {
    marginTop: '32px',
    textDecoration: 'none',
    padding: '8px',
    background: (theme) => theme.palette.primary.main,
    color: 'white',
    textAlign: 'center',
    borderRadius: '8px',
  },
  listingWrapper: {
    margin: '64px 0',
  },
  productsGrid: {
    width: '100%',
    marginTop: '32px',
  },
  item: {
    padding: { xs: '0 0 16px 0', md: '0 16px 16px 0' },
  },
};
