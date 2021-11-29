const rewireStyledComponents = require("react-app-rewire-styled-components");

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-a11y",
    'storybook-addon-designs'
  ],
};
