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

export const LazyPreloadPrevNext: Story = {
  args: {
    lazyPreloaderClass: 'swiper-lazy-preloader',
    lazyPreloadPrevNext: 2,
  } as any,
  parameters: {
    storyName: 'Native Lazy Loading with Preloader Prev Next Number',
    controls: { include: ['lazyPreloaderClass', 'lazyPreloadPrevNext'] }, 
    docs: {
      description: {
        story: 'Number of next and previous slides to preload. Only applicable if using lazy loading.',
      },
    },
  },
};