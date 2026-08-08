import { Meta, StoryObj } from "@storybook/angular";
import { virtualSlidesSharedMeta } from "./virtual-slides-shared";

const meta: Meta = {
  ...virtualSlidesSharedMeta,
  title: 'Ng Swiper Element/Features/Virtual Slides/General',
};

export default meta;
type Story = StoryObj;

export const DefaultVirtualSlides: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    totalSlides: 1000,
    storyName: 'Default Virtual Slides',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Renders 1000 slides virtually. Keeps only required DOM elements active for optimal performance.',
      },
    },
  },
};

export const BufferSlidesBeforeAndAfter: Story = {
  args: {
    enabled: true,
    addSlidesBefore: 3,
    addSlidesAfter: 3,
  } as any,
  parameters: {
    totalSlides: 500,
    storyName: 'Slides Buffer - addSlidesBefore & addSlidesAfter',
    controls: { include: ['enabled', 'addSlidesBefore', 'addSlidesAfter'] }, 
    docs: {
      description: {
        story: 'Specifies additional buffer slides rendered before and after visible slides to ensure smoother swiping.',
      },
    },
  },
};

export const CachedVirtualSlides: Story = {
  args: {
    enabled: true,
    cache: true,
  } as any,
  parameters: {
    totalSlides: 500,
    storyName: 'Cache DOM Elements - virtual.cache',
    controls: { include: ['enabled', 'cache'] }, 
    docs: {
      description: {
        story: 'Enables caching of rendered slide DOM elements to improve re-rendering efficiency.',
      },
    },
  },
};