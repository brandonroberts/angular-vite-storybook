import '@angular/compiler';
// import '@analogjs/vitest-angular/setup-zone';

import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { getTestBed } from '@angular/core/testing';
import { beforeAll } from 'vitest';


import { setProjectAnnotations } from '@storybook/angular/dist/client/index.mjs';
import * as configAnnotations from '@storybook/angular/dist/client/config.mjs';
import * as docsAnnotations from'@storybook/angular/dist/client/docs/config.mjs';
import * as projectAnnotations from './preview';
// console.log({ previewAnnotations });
const annotations = setProjectAnnotations([configAnnotations, docsAnnotations, projectAnnotations]);

// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);

// getTestBed().initTestEnvironment(
//   BrowserTestingModule,
//   platformBrowserTesting()
// );
