import '@angular/compiler';
// import '@analogjs/vitest-angular/setup-zone';

import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { getTestBed } from '@angular/core/testing';
import { beforeAll } from 'vitest';
// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import { setProjectAnnotations } from '@storybook/angular/dist/client/index.js';
import * as previewAnnotations from './preview';
// console.log({ previewAnnotations });
const annotations = setProjectAnnotations([previewAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);

// getTestBed().initTestEnvironment(
//   BrowserTestingModule,
//   platformBrowserTesting()
// );
