import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      ${({ theme }) => css`
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      `}
    }
  `}

`;

export default GlobalStyles;
