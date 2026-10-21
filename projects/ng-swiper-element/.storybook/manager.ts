import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'NG Swiper Element Storybook',
    brandUrl: '#',
    brandTarget: '_blank',
  }),
});
