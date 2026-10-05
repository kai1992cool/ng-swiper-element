import type { Preview } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideSwiper } from 'ng-swiper-element';
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [provideSwiper()],
    }),
  ],
};

export default preview;