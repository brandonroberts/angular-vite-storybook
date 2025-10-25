import '@angular/compiler';
import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@analogjs/storybook-angular/testing';
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";

import * as projectAnnotations from './preview';

const annotations = setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
