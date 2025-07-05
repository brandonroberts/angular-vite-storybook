import '@angular/compiler';
// import '@analogjs/vitest-angular/setup-zone';
import { render } from '@storybook/angular/dist/client/render.js';
import * as previewAnnotations from '../.storybook/preview';

import {
  BrowserTestingModule,
  platformBrowserTesting,
} from '@angular/platform-browser/testing';
import { getTestBed } from '@angular/core/testing';

getTestBed().initTestEnvironment(
  BrowserTestingModule,
  platformBrowserTesting()
);

console.log('pa', previewAnnotations, render);
// const annotations = setProjectAnnotations([previewAnnotations]);