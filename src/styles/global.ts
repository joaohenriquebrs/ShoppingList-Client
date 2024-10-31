import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Inter';
      src: url('/fonts/Inter.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }

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

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    overflow-x: hidden;
    background: #0C0C0D;
  }
`;
export default GlobalStyle;
