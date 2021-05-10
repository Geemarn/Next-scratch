import React, {useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles';
import  { darkTheme, lightTheme } from 'lib/theme';

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    // Remove server side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if ( jssStyles && jssStyles.parentNode ) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={ true ? darkTheme : lightTheme }>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
};

export default MyApp;