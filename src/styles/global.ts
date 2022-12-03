import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "poppins", sans-serif;
  }

    body {
      background-color: #222;
      display: flex;
      min-height: 100vh;
      overflow-x: hidden; 
    }

  * {
    scrollbar-width: auto;
    scrollbar-color: #549ba0 #ffffff;
  }

  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #549ba0;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }

`;

export default GlobalStyles;
