import React from 'react';
import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles';
import  { darkTheme, lightTheme } from 'lib/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={ true ? darkTheme : lightTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default MyApp;