import "../styles/globals.css";

import { globalDecorators } from "./decorators";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
};

export const decorators = globalDecorators;

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",

      items: ["light", "dark"],
      title: true,

      dynamicTitle: true,
    },
  },
};
