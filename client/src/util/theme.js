const theme = {
  // https://www.colourlovers.com/palette/38793/creative_cream
  colors: {
    green: '#caff42',
    light: '#ebf7f8',
    lightBlue: '#d0e0eb',
    medBlue: '#88abc2',
    darkBlue: '#49708a',

    white: '#ffffff',

    // strava colors
    newell: '#fc4c02',
    dusk: '#6134ff',
    dawn: '#d23cff',
    podium: '#fbcd00',
    glacier: '#95e6f5',
    twilight: '#022a79',
    asphalt: '#60605a',
    stone: '#efefe0',
  },
  // good ol' Bootstrap-inspired breakpoints
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  // typography styles - for keeping sizes consistent
  typography: {
    // correspond with Google font actual weights for Rubik
    weights: {
      thin: '100',
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700',
      black: '900',
    },
  },
  // box shadows
  shadows: {
    minimal: '',
    light: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05)',
    default: '2px 2px 5px rgba(45, 83, 111, 0.1), -2px -2px 5px rgba(45, 83, 111, 0.1)',
  },
};

export const defaultShadow = () =>
  `box-shadow: 2px 2px 5px rgba(45, 83, 111, 0.1), -2px -2px 5px rgba(45, 83, 111, 0.1);`;

// helper functions to ease using theme - components can import just the helpers they need and easily access the theme with them
export const getBreakpoint = breakpoint => props => props.theme.breakpoints[breakpoint];

export const getColor = color => props => props.theme.colors[color];

export const getFontSize = (element, size) => props => props.theme.typography.sizes[element][size];

export const getFontWeight = weight => props => props.theme.typography.weights[weight];

export const getShadow = shadow => props => props.theme.shadows[shadow];

export default theme;
