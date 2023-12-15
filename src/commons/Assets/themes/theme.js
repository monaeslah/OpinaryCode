import { createTheme } from '@material-ui/core/styles'

export const Theme = createTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#FFFFFF',
        height: '10px',
        minHeight: '40px',
        alignItems: 'flex-end',
        '& h4': {
          display: 'none'
        },
        '& h6': {
          color: '#A258FF',
          marginLeft: '250px'
        }
      }
    },
    MuiInput: {
      input: {
        textAlign: 'center'
      }
    }
  },
  spacing: [0, 2, 4, 8, 12, 16, 24, 32, 48, 56, 64, 96, 128, 160, 256, 296],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1240,
      xl: 1440
    }
  },
  palette: {
    common: {
      black: '#08141E',
      inputLabel: '#626782'
    },
    primary: {
      main: '#f9a524',
      light: '#f9a52433',
      accent: '#F7EBFF',

      variant: '#7A42BF',
      contrastText: '#FFFFFF',
      hover: 'rgba(162, 88, 255, 0.04)',
      selected: 'rgba(162, 88, 255, 0.08)'
    },
    secondary: {
      main: '#494AD9',
      light: '#E1E0FF',

      variant: '#63FFC7',
      contrastText: '#08141E'
    },
    neutral: {
      neutral0: '#1B1B23',
      neutral10: '#84838A',
      neutral20: '#ACAAB4',
      neutral30: '#EBEAEE',
      neutral40: '#FFFFFF'
    },

    error: {
      main: '#FF365E',
      contrastText: '#FFFFFF'
    },
    success: {
      main: '#42C59E '
    },
    warning: {
      main: '#FFA654'
    },

    onPrimary: {
      primary: '#151680',
      highEmphasis: '#FFFFFF',
      mediumEmphasis: 'rgba(255, 255, 255, 0.74)',
      disabled: 'rgba(255, 255, 255, 0.38)'
    },
    surface: {
      highSurface: '#06061E',
      mediumSurface: 'rgba(6, 6, 30, 0.60)',
      disabled: 'rgba(6, 6, 30, 0.38)',
      main: '#FFFFFF',
      overlay: 'rgba(0, 0, 0, 0.08)',
      darkOverlay: 'rgba(8, 20, 30, 0.8)'
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      gray: '#EDEDF1',
      richBlack: '#08141E',
      contentContainer: '#ffffe7'
    },

    onSurface: {
      highEmphasis: '#08141E',
      mediumEmphasis: 'rgba(8, 20, 30, 0.6)',
      disabled: 'rgba(8, 20, 30, 0.38)',
      btnDisabled: 'rgba(0, 0, 0, 0.04)',
      tableDisabled: 'rgba(161, 166, 170, 0.24)',
      iconBtnDisabled: 'rgba(0, 0, 0, 0.12)'
    },
    borderColor: {
      onSurface: 'rgba(0, 0, 0, 0.12)',
      table: '#DDE1E6'
    },
    text: {
      primary: '#08141E',
      secondary: '#FFFFFF'
    },
    // #FAEE5E  43.27%
    gradient: {
      bluepurple:
        'radial-gradient(165.45% 165.45% at 0% -10%, #FFFFFF 0.71%,#DEE1F8  43.27%, #F0E3FF 76.54%, #CA9FFF 100%)',
      yellow:
        'radial-gradient(165.45% 165.45% at 0% -10%, #4DA0E6 0.71%,#4cB0E1  43.27%,#acedf8   76.54%,  #ccedf8 100%)',
      green:
        'radial-gradient(96% 96% at 9.7% 17.08%, #3FFF69 0%, #2FFFB4 44.27%, #03C3FF 100%)',
      magenta:
        'radial-gradient(124.32% 124.32% at -7.58% 0%, #FF6624 0%, #FF456A 52.6%, #FF28A9 100%)',
      lightPurple:
        'radial-gradient(165.45% 165.45% at 0% -10%, rgba(252, 89, 255, 0.1) 0.71%, rgba(162, 88, 255, 0.1) 43.27%, rgba(61, 127, 255, 0.1) 76.54%, rgba(65, 164, 255, 0.1) 100%)',
      purpleTrial:
        'radial-gradient(134.71% 152.78% at 0% 0%, rgba(122, 66, 191, 0.8) 0.71%, rgba(162, 88, 255, 0.8) 43.66%, rgba(61, 127, 255, 0.8) 100%)'
    },
    badge: {
      green: {
        bg: '#E0FFF4'
      },
      purple: {
        bg: '#EBDBFF'
      },
      yellow: {
        bg: '#FFFACF',
        color: '#F2DA00'
      },
      red: {
        bg: '#FFD0DA',
        color: '#FF456A'
      }
    },
    filter: {
      toBlack: 'brightness(0) saturate(100%)',
      toWhite:
        'brightness(0) saturate(100%) filter: invert(99%) sepia(99%) saturate(0%) hue-rotate(294deg) brightness(107%) contrast(101%)',
      blackToPurple:
        'brightness(0) saturate(100%) invert(18%) sepia(16%) saturate(7409%) hue-rotate(248deg) brightness(95%) contrast(92%)',
      blackToLightPurple:
        'invert(37%) sepia(76%) saturate(2381%) hue-rotate(243deg) brightness(101%) contrast(103%)',
      whiteToLightPurple:
        'brightness(0) saturate(100%) invert(41%) sepia(20%) saturate(7488%) hue-rotate(243deg) brightness(101%) contrast(101%)'
    }
  },
  typography: {
    h1: {
      fontFamily: "'Archivo Black', sans-serif",
      fontSize: '67px',
      fontWeight: 400,
      lineHeight: '100.5px'
    },
    h2: {
      fontFamily: "'Archivo Black', sans-serif",
      fontSize: '51px',
      fontWeight: 400,
      lineHeight: '76.5px'
    },
    h3: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '38px',
      fontWeight: 700,
      lineHeight: '57px'
    },
    h4: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 700,
      fontSize: '28px',
      lineHeight: '42px'
    },
    h5: {
      fontFamily: "'Archivo Black', sans-serif",
      fontWeight: 400,
      fontSize: '21px',
      lineHeight: '31.5px'
    },
    h6: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '21px',
      fontWeight: 700,
      lineHeight: '31.5px'
    },

    subtitle1: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '21px',
      fontWeight: 400,
      lineHeight: '31.5px'
    },
    subtitle2: {
      fontFamily: "'Roboto', sans-serif",
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px'
    },

    body1: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px'
    },
    body2: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px'
    },
    caption: {
      fontFamily: "'Roboto', sans-serif",
      fontWeight: 400,
      fontSize: '9px',
      lineHeight: '13.5px'
    },

    button: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '1.25px',
      textTransform: 'none'
    },

    overline: {
      fontFamily: "'Source Sans Pro', sans-serif",
      fontWeight: 600,
      fontSize: '10px',
      lineHeight: '16px',
      letterSpacing: '1.5px',
      textTransform: 'uppercase'
    },
    bridge: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '10px',
      lineHeight: '18px',
      letterSpacing: '1.5px'
    },
    bold: {
      fontWeight: 700
    }
  },
  shape: {
    borderRadius: '8px',
    loginRadius: '0.69rem',
    sharpBorderRadius: '4px',
    circle: '50%'
  },
  shadows: [
    'none',
    '0px 10px 20px 0px rgba(178, 179, 195, 0.15)',
    '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)',
    '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
    '0px 4px 54px #BCC1E5',
    '6px 20px 20px 0px rgba(0, 0, 0, 0.05)'
  ]
})
