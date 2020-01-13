import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  c_button_m_primary_BackgroundColor,
  c_button_m_primary_hover_BackgroundColor,
  global_Color_100,
  c_button_m_primary_Color
} from '@patternfly/react-tokens';

const primary = '#06c';
const primaryDark = '#004080';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Red Hat Text', sans-serif"
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: 'none',
        transition: 'none',
        fontWeight: 400,
        lineHeight: '24px'
      },
      containedPrimary: {
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: primaryDark,
          boxShadow: 'none'
        }
      },
      label: {
        color: c_button_m_primary_Color.value,
        textTransform: 'none',
        fontSize: '1rem',
        lineHeight: 'unset'
      }
    }
  },
  shape: {
    borderRadius: 3
  },
  palette: {
    primary: {
      main: primary,
      dark: '004080',
      contrastText: global_Color_100.value
    }
  }
});

export default theme;
