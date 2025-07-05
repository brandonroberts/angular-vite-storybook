import { StorybookConfig } from '@storybook/angular';
import { StorybookConfigVite} from '@storybook/builder-vite';
import { UserConfig } from 'vite';
import { mergeConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

const config: StorybookConfig & StorybookConfigVite = {
  stories: ["../src/**/*.mdx", "../src/**/button.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-vitest"
  ],
  core: {
    builder:  "@storybook/builder-vite"
  },
  framework: {
    name: "@storybook/angular",
    options: {},
  },
  docs: {},
  async viteFinal(config: UserConfig) {
    // Merge custom configuration into the default config

    return mergeConfig(config, <UserConfig>{
      define: {
        STORYBOOK_ANGULAR_OPTIONS: {
          experimentalZoneless: false
        }
      },
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          '@storybook/angular',
          '@storybook/angular/dist/client/index.js',
          '@angular/compiler',
          '@storybook/blocks',
          'tslib',
        ],
        exclude: [
          '@storybook/angular/dist/client/config.js'
        ]
      },
      plugins: [angular({ jit: true, tsconfig: './.storybook/tsconfig.json' })],
    });
  },
};

export default config;
