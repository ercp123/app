// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body,
#root {
  height: 100vh;
  margin: 0;
}
  body ,*{
    margin: 0;
    padding: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    /* Adicione seus estilos globais aqui */
    box-sizing:border-box;
    -webkit-font-smoothing:antialiased;
   

  }

  .cpf::placeholder {
    font-weight: 400 !important;
    font-size: 24px !important;
    color: rgba(0, 38, 0.6) !important;
  }


  span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, address, code, em, img, small, strong, sub, sup, tt, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, embed, figure, figcaption, footer, header, menu, nav, section, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* Adicione mais estilos globais conforme necessário */
`;

export default GlobalStyle;
