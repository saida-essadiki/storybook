module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    '../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    "storybook-addon-react-router-v6",
    'storybook-addon-designs',
    '@storybook/preset-create-react-app'
  ],
  features: {
    interactionsDebugger: true, // 👈 Enable playback controls
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
 
};
