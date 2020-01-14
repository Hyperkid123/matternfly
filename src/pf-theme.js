import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {
  c_button_m_primary_BackgroundColor,
  c_button_m_primary_hover_BackgroundColor,
  global_Color_100,
  c_button_m_primary_Color
} from '@patternfly/react-tokens';

const primary = '#06c';
const primaryDark = '#004080';
const someDark = '#151515';
const dangerColor = '#c9190b';

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
      text: {
        color: primary,
        '&:hover': {
          color: primaryDark,
          background: 'none',
          boxShadow: 'none'
        }
      },
      containedPrimary: {
        color: c_button_m_primary_Color.value,
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: primaryDark,
          boxShadow: 'none'
        }
      },
      containedSecondary: {
        color: c_button_m_primary_Color.value,
        boxShadow: 'none',
        backgroundColor: dangerColor,
        '&:hover': {
          backgroundColor: dangerColor,
          boxShadow: 'none'
        }
      },
      outlinedPrimary: {
        color: primary,
        position: 'relative',
        border: 'none',
        paddingTop: 6,
        paddingBottom: 6,
        '&::after': {
          position: 'absolute',
          content: "''",
          border: `1px solid ${primary}`,
          borderRadius: 3,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        '&:hover': {
          '&::after': {
            borderWidth: 2,
            borderBottomColor: primary
          },
          border: 'none',
          backgroundColor: c_button_m_primary_Color.value,
          boxShadow: 'none'
        }
      },
      outlinedSecondary: {
        color: someDark,
        position: 'relative',
        border: 'none',
        paddingTop: 6,
        paddingBottom: 6,
        '&::after': {
          position: 'absolute',
          content: "''",
          border: `1px solid ${someDark}`,
          borderRadius: 3,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        '&:hover': {
          '&::after': {
            borderWidth: 2,
            borderBottomColor: someDark
          },
          border: 'none',
          backgroundColor: c_button_m_primary_Color.value,
          boxShadow: 'none'
        }
      },
      outlined: {
        borderRadius: 0,
        position: 'relative',
        border: 'none',
        paddingTop: 6,
        paddingBottom: 6,
        '&::after': {
          position: 'absolute',
          content: "''",
          border: `1px solid #d2d2d2`,
          borderBottomColor: '#8a8d90',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        '&:hover': {
          '&::after': {
            borderBottomColor: primary,
            borderBottomWidth: 2
          },
          backgroundColor: c_button_m_primary_Color.value
        }
      },
      label: {
        color: 'inherit',
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
