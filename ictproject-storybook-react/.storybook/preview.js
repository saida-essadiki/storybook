import { addDecorator } from "@storybook/react";
import { globalDecorators } from "./decorators";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

globalDecorators.forEach((decorator) => addDecorator(decorator));
