import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Poppins';
      src: url('/fonts/Poppins-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    /* font-family: Poppins, sans-serif; */
  }
`;
export default GlobalStyle;
