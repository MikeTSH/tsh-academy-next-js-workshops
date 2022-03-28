import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  appBar: {
    boxShadow: 'none',
    backgroundColor: 'white',
  },
  headerToolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '16px',
  },
  logoLink: {
    textDecoration: 'none',
    cursor: 'pointer',
  },
  headerAutocomplete: {
    width: { xs: 150, md: 300 },
  },
  headerActions: {
    display: 'flex',
  },
};
