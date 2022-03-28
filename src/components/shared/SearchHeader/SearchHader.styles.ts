import { Styles } from 'styles/theme';

export const styles: Record<string, Styles> = {
  wrapper: {
    display: 'flex',
    margin: '0 16px',
    justifyContent: 'space-between',
  },
  headerText: {
    display: 'flex',
    flexDirection: 'column',
  },
  sortField: {
    width: '200px',
  },
  emptySort: {
    display: 'none',
  },
};
