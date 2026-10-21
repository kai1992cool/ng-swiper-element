import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: 'NG Swiper Element Storybook',
    brandUrl: '#',
    brandTarget: '_blank',
  }),
});
