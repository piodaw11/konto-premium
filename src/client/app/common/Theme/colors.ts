import { darken, lighten } from '@mui/system'

const colors = {
  green: {
    light: lighten('#2a9d8f', 0.3),
    standard: '#2a9d8f',
    dark: darken('#2a9d8f', 0.2)
  },
  darkgreen: {
    light: lighten('#264653', 0.3),
    standard: '#264653',
    dark: darken('#264653', 0.2)
  },
  yellow: {
    light: lighten('#e9c46a', 0.3),
    standard: '#e9c46a',
    dark: darken('#e9c46a', 0.2)
  },
  orange: {
    light: lighten('#f4a261', 0.3),
    standard: '#f4a261',
    dark: darken('#f4a261', 0.2)
  },
  red: {
    light: lighten('#e76f51', 0.3),
    standard: '#e76f51',
    dark: darken('#e76f51', 0.2)
  },
  black: {
    light: lighten('#333', 0.3),
    standard: '#333',
    dark: darken('#333', 0.2)
  },
  white: {
    light: lighten('#ccc', 0.3),
    standard: '#ccc',
    dark: darken('#ccc', 0.2)
  }
}

export default colors
