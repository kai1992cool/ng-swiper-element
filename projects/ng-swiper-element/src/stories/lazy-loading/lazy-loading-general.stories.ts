import { Meta, StoryObj } from "@storybook/angular";
import { lazyLoadingSharedMeta } from "./lazy-loading-shared";

const meta: Meta = {
  ...lazyLoadingSharedMeta,
  title: 'Ng Swiper Element/Features/Lazy Loading/General',
};

export default meta;
type Story = StoryObj;

export const NativeLazyLoading: Story = {
  args: {
    preloadImages: false,
    lazyPreloaderClass: 'swiper-lazy-preloader',
  } as any,
  parameters: {
    storyName: 'Native Lazy Loading with Preloader',
    controls: { include: ['preloadImages', 'lazyPreloaderClass'] }, 
    docs: {
      description: {
        story: 'Renders slide images natively with `loading="lazy"` and includes preloader spinners until images are loaded into view.',
      },
    },
  },
};

export const PreloadAllImages: Story = {
  args: {
    preloadImages: true,
  } as any,
  parameters: {
    storyName: 'Preload All Images - preloadImages: true',
    controls: { include: ['preloadImages'] }, 
    docs: {
      description: {
        story: 'Forces Swiper to preload all slide images immediately upon initialization rather than deferring load.',
      },
    },
  },
};