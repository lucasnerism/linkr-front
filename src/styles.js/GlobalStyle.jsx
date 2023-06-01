import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }

  body{
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    background: #333333;
;
  }
  a{
    text-decoration: none;
    color: inherit ;
  }
`;

export default GlobalStyle;