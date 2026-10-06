import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideSwiper } from 'ng-swiper-element';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { provideZonelessChangeDetection } from '@angular/core';
setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideSwiper(), provideZonelessChangeDetection()],
    }),
  ],
};

export default preview;
