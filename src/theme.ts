import { createMuiTheme } from '@material-ui/core/styles';
import { typographyStyles } from './components/Typography';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2E7DF7',
    },
  },
  typography: typographyStyles,
});

export default theme;
