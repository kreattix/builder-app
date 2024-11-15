import { Color } from '@kreattix/colors'
import { createGlobalStyle } from 'styled-components'

export const primaryColor = Color('#1d4ed8')
export const darkColor = Color('#475569')

const darkTheme = {
  primary: primaryColor.shades[500],
  primaryLight: primaryColor.shades[400],
  primaryDark: primaryColor.shades[600],
  main: darkColor.shades[950],
  accent: darkColor.shades[900],
  border: darkColor.shades[700],
  borderDark: darkColor.shades[800],
  borderLight: darkColor.shades[600],
  text: darkColor.shades[100],
  muted: darkColor.shades[300]
}

export const theme = {
  fonts: {
    primary: '"Open Sans", sans-serif',
    fontSize: '14px'
  },
  colors: {
    primary: 'var(--primary-color)',
    primaryLight: 'var(--primary-light-color)',
    primaryDark: 'var(--primary-dark-color)',
    main: 'var(--main-color)',
    accent: 'var(--accent-color)',
    border: 'var(--border-color)',
    text: 'var(--text-color)',
    muted: 'var(--muted-color)',
    borderDark: 'var(--border-dark-color)',
    borderLight: 'var(--border-light-color)'
  },
  transition: {
    slow: '0.3s ease-in-out',
    medium: '0.2s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  radius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '999px',
    circle: '50%'
  },
  space: {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: `0.75rem`,
    lg: '1.5rem',
    xl: '2rem'
  },
  size: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: `1rem`,
    lg: '1.5rem',
    xl: '2rem'
  },
  text: {
    body: '1em',
    subtitle: '1.25em',
    title: '1.5em',
    subheading: '1.75em',
    heading: '2em',
    display: '3em',
    label: '0.75em',
    span: '1em'
  }
}

export const GlobalStyle = createGlobalStyle({
  ':root': {
    '--primary-color': darkTheme.primary,
    '--primary-light-color': darkTheme.primaryLight,
    '--primary-dark-color': darkTheme.primaryDark,
    '--main-color': darkTheme.main,
    '--accent-color': darkTheme.accent,
    '--border-color': darkTheme.border,
    '--text-color': darkTheme.text,
    '--muted-color': darkTheme.muted,
    '--border-dark-color': darkTheme.borderDark,
    '--border-light-color': darkTheme.borderLight
  },
  '*': {
    boxSizing: 'border-box'
  },
  body: {
    margin: 0,
    fontSize: theme.fonts.fontSize
  }
})
