import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  layoutContent: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
};
