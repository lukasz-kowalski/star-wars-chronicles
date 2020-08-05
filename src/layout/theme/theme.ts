import { createMuiTheme } from '@material-ui/core/styles';

export type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

export const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FBE819',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export const emotionTheme = {
  colors: {
    primary: '#000000',
    secondary: '#FBE819',
  },
};
