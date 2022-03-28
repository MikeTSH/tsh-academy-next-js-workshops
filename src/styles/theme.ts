import { createTheme, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  components: {
    MuiCssBaseline: {
      // TODO[PERF-1]: Optimize font
      styleOverrides: ``,
    },
  },
});

export default theme;

export type Styles = SxProps<Theme>;
