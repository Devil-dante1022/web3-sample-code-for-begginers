import { createTheme } from '@mui/material/styles'

const breakpointValues = {
  xs: 0,
  sm: 600,
  md: 768,
  lg: 1024,
  xl: 1280,
  x2l: 1330,
  x3l: 1440
};

export const dark = createTheme({
  breakpoints: { values: breakpointValues },
  typography: {
    fontFamily: 'Roboto',
    h2: {
      fontSize: '54px',
      lineHeight: '72px',
      fontWeight: '400',
      color:'white',
    },
    h4: {
      fontSize: 34,
      fontWeight: 700
    },
    h5: {
      fontSize: '18px',
      fontWeight: 400,
      color:'white',
      maxWidth:'400px'
    },
    h6: {
      fontSize: '14px',
      fontWeight: 400,
      color:'white',
      maxWidth:'165px',
      textAlign:'center'
    },
    body1: {
      fontSize: 18,
      fontWeight: 400
    },
    body2: {
      fontSize: 14,
      fontWeight: 500
    },
    button: {
      fontSize: 18,
      fontWeight: 600
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      display: 'block'
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 300
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 500
    },

    overline: {
      fontSize: 12,
      fontWeight: 300
    }
  },
  palette: {
    primary: {
      main: '#15253D',
      
    },
    secondary: {
      main: '#26D6BB',
      contrastText:'white'
    },

    text:{
      primary: '#ffffff',
      secondary:'#26D6BB'
    }
  }
})
export const light = createTheme({
  typography: {
    fontFamily: 'Roboto',
    h2: {
      fontSize: '54px',
      lineHeight: '72px',
      fontWeight: '400',
      color:'white',
    },
    h4: {
      fontSize: 34,
      fontWeight: 700
    },
    h5: {
      fontSize: '18px',
      fontWeight: 400,
      color:'white',
      maxWidth:'400px'
    },
    h6: {
      fontSize: '14px',
      fontWeight: 400,
      color:'white',
      maxWidth:'165px',
      textAlign:'center'
    },
    body1: {
      fontSize: 18,
      fontWeight: 400
    },
    body2: {
      fontSize: 14,
      fontWeight: 500
    },
    button: {
      fontSize: 18,
      fontWeight: 600
    },
    caption: {
      fontSize: 12,
      fontWeight: 500,
      display: 'block'
    },
    subtitle1: {
      fontSize: 20,
      lineHeight: '28px',
      fontWeight: 300
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 500
    },

    overline: {
      fontSize: 12,
      fontWeight: 300
    }
  },
  palette: {
    primary: {
      main: '#2F4F4F',
      contrastText:'white'
      
    },
    secondary: {
      main: '#15253D',
      contrastText:'white'
    },
    text:{
      primary: '#26D6BB',
      secondary:'#26D6BB'
    }
  }
}) 