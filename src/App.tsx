import React from 'react';
import { ThemeProvider as MaterialUiThemeProvider } from '@material-ui/styles';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import Routes from 'routes/Routes';
import { materialTheme, emotionTheme } from './layout/theme/theme';
import globalStyles from 'layout/theme/globalStyles';

const App = () => {
  return (
    <MaterialUiThemeProvider theme={materialTheme}>
      <EmotionThemeProvider theme={emotionTheme}>
        <Global styles={globalStyles} />
        <Routes />
      </EmotionThemeProvider>
    </MaterialUiThemeProvider>
  );
};

export default App;
