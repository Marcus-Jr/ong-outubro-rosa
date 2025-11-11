import { createTheme, responsiveFontSizes } from '@mui/material/styles';
declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    main: string;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: '#ffffffff',
    },
    secondary: {
      main: '#D9326F',  
    },
    tertiary: {
      main: '#730217'
    }
  },
  typography: {
    fontFamily: "Franklin Gothic"
  }
});

theme.palette.tertiary.contrastText = theme.palette.getContrastText(theme.palette.tertiary.main);

theme = responsiveFontSizes(theme);

export default theme;