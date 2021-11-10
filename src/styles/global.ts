import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --light-blue: rgba(43, 103, 246, 0.16);
  --blue: #2B67F6;
  --dark-blue: #1147C7;
  --white: #FFFFFF;
  --gray: #A5A7A7;
  --black: #333333;
  --green: #27AE60;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


@media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html {
    font-size: 87.5%;
  }
}

body {
  color: var(--black);
  background: var(--light-blue);
}

body, input, textarea, button {
  font: 400 1rem "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

`;
