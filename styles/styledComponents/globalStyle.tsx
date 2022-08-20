import { createGlobalStyle, css } from "styled-components";

const GlobalStyle = createGlobalStyle(
  ({ theme: { backgroundColor, name } }) => css`
    body {
      background: ${name === "light"
        ? backgroundColor.light
        : backgroundColor.dark};
    }
  `
);

export default GlobalStyle;
