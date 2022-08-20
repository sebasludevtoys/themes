import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: "light" | "dark";
    backgroundColor: typeof backgroundColor;
  }
}

const backgroundColor = {
  light: "#ebe2dc",
  dark: "#49372b",
};

export const lightTheme: DefaultTheme = {
  name: "light",
  backgroundColor,
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  name: "dark",
};
