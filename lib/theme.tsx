import { createMuiTheme } from '@material-ui/core/styles';
import {} from './util/interfaces';

const theme = createMuiTheme({
  overrides: {
    // resolucao do bug de overflow no componente 'Grid'
    MuiGrid: {
      container: {
        width: '100% !important',
        margin: '0 !important',
      },
    },
    //
    MuiTypography: {
      h1: {
        color: 'pink',
      },
      h2: {
        color: 'purple',
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 762,
      lg: 1024,
      xl: 1280,
    },
  },
  palette: {
    custom: {
      corLaranja: '#FFA500',
      corMarrom: '#DEB887',
    },
    text: {
      primary: '#5c6ac4',
      secondary: '#19f719',
    },
  },
  typography: {
    fontSize: 15,
  },
  spacing: 4,
});

export default theme;
