// .storybook/manager.ts

import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'dark', // or 'light'

    // Branding
    brandTitle: 'NG Swiper Element Storybook',
    brandUrl: '#',
    brandTarget: '_blank', // '_blank' opens in new tab
    // brandImage: 'https://placehold.co/350x150', // Optional: URL to your logo
  }),
});