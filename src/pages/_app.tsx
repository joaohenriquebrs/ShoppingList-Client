import isPropValid from '@emotion/is-prop-valid';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { StyleSheetManager, ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Loja Souv</title>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
