import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  searchPage: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  searchWrapper: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'flex-start',
    padding: '32px',
    width: '100%',
  },
  searchHeaderWrapper: {
    width: '100%',
    height: '100%',
    margin: { xs: '24px 0 0 0', md: '0 0 0 24px' },
  },
  searchProgressBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  searchResultsGrid: {
    padding: '16px',
  },
};
