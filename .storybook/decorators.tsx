import { ThemeProvider } from "styled-components";
import React from "react";
import { DecoratorFn } from "@storybook/react";
import GlobalStyle from "../styles/styledComponents/globalStyle";
import { darkTheme, lightTheme } from "../styles/styledComponents/theme";

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme;
  const storyTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <div className={theme}>
        <StoryFn />
      </div>
    </ThemeProvider>
  );
};

export const globalDecorators = [withTheme];
