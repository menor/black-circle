const breakpoints = [
  '40em', // 640
  '60em' // 960
]

const colors = {
  black: '#000',
  white: '#FFF',
  brown: {
    primary: '#8D6346',
  },
  gray: {
    light: '#B0C2CC',
    primary: '#4D5061',
    dark: '#22293C',
    darker: '#30323D',
  },
  lime: {
    light: '#DDF45B',
    primary: '#C6F91F',
  },
  pink: {
    primary: '#B8006B',
  },
}

const fonts = {
  sans:
    '-apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Segoe UI, Lucida Grande, Helvetica Neue, Helvetica, Fira Sans, Roboto, Noto, Droid Sans, Cantarell, Oxygen, Ubuntu, Franklin Gothic Medium, Century Gothic, Liberation Sans, sans-serif',
  serif: 'Hoefler Text, Baskerville Old Face, Garamond, Times New Roman, serif',
  mono: 'Consolas, monaco, monospace',
}

export const theme = {
  breakpoints,
  colors,
  fonts,
}

export const LOCAL_STORAGE_DATA_KEY = 'black-circle-data'
