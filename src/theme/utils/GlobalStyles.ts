import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import normalize from './normalize';
import { Theme } from '../index';

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
  ${reset};
  ${normalize};

  html {
    box-sizing: border-box;
  }

  *,:after,:before {
    box-sizing: inherit
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Helvetica, sans-serif';
  }
`;

export default GlobalStyles;
