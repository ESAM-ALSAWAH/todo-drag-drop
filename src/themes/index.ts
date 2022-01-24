import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
  interface Palette {
    status: any
  }
  interface PaletteOptions {
    status?: any
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      main: '#F8F9FA',
    },
    status: {
      todo: '#F66568',
      done: '#FFC773',
      doing: '#6BE795',
      archive: '#7389FF',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Open Sans'].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '48px',
      color: '#313131',
    },
    h2: {
      fontWeight: 800,
      fontSize: '20px',
      color: '#313131',
      textTransform: 'capitalize',
    },
    h3: {
      fontWeight: 700,
      fontSize: '18px',
    },
    body1: {
      fontWeight: 'normal',
      fontSize: '13px',
      lineHeight: '15px',
      color: '#757575',
      fontFamily: ' Roboto',
    },
    body2: {
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '2',
      fontFamily: ' Roboto',
      wordBreak: 'break-all',
      textTransform: 'capitalize',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})
