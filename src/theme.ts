import { createMuiTheme } from '@material-ui/core/styles';
import { typographyStyles } from './components/Typography';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    border: Palette['primary'];
  }
  interface PaletteOptions {
    border: PaletteOptions['primary'];
  }
}

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    primary: {
      main: '#2E7DF7',
      light: '#5D9AF9',
      dark: '#3686F7',
    },
    border: {
      main: 'rgba(60, 60, 67, 0.13)',
    },
  },
  typography: typographyStyles,
});

export default theme;
