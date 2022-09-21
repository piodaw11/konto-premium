import { createTheme } from '@mui/material'

import colors from './colors'

const Theme = createTheme({
  typography: {
    fontFamily: ['Poppins, sans-serif'].join(',')
  },
  palette: {
    mode: 'light',
    primary: {
      light: colors.darkgreen.light,
      main: colors.darkgreen.standard,
      dark: colors.darkgreen.dark
    },
    secondary: {
      light: colors.orange.light,
      main: colors.orange.standard,
      dark: colors.orange.dark
    },
    text: {
      primary: colors.black.dark,
      secondary: colors.black.standard
    }
  }
})

export default Theme
