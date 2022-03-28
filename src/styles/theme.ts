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
      styleOverrides: `
        @font-face {
          font-family: "Roboto";
          src: url(/fonts/Roboto.woff2) format("woff2 supports variations"), url(/fonts/Roboto.woff2) format("woff2-variations");
          font-weight: 100 900;
          font-display: swap;
        }`,
    },
  },
});

export default theme;

export type Styles = SxProps<Theme>;
