import { createMuiTheme } from '@material-ui/core/styles';
import { typographyStyles } from './components/Typography';

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
  },
  typography: typographyStyles,
});

export default theme;
