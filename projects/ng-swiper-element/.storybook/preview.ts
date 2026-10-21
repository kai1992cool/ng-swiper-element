import { moduleMetadata } from '@storybook/angular';
import { provideSwiper } from 'ng-swiper-element';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const preview = {
  decorators: [
    moduleMetadata({
      providers: [provideSwiper()],
    }),
  ],
};

export default preview;
