import { initialize, mswDecorator } from "msw-storybook-addon";
import { themes } from "@storybook/theming";

import "../src/styles/global.css";

let options = {};
if (location.hostname === "gguip.github.io") {
  options = {
    serviceWorker: {
      url: "/design-system-rs/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  };
}

initialize(options);

export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};
