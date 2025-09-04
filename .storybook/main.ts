import { StorybookConfig } from '@analogjs/storybook-angular';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@analogjs/storybook-angular",
    options: {},
  },
  docs: {},
  staticDirs: ["../public"]
};

export default config;
