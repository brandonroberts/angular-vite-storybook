import 'zone.js';
import { type Preview } from '@analogjs/storybook-angular';
// import { setCompodocJson } from '@storybook/addon-docs/angular';
// import { provideNoopAnimations } from '@angular/platform-browser/animations';
import docJson from '../documentation.json';
// setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    // applicationConfig({
    //   providers: [provideNoopAnimations()]
    // })
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
