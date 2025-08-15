import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@analogjs/storybook-angular/testing';

import * as projectAnnotations from './preview';

const annotations = setProjectAnnotations([projectAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
