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

export const RenderExternalFunction: Story = {
  args: {
    enabled: true,
    renderExternal: (data: any) => {
      // Mock external rendering function
      return `<div class="external-slide">External Slide ${data.slideIndex}</div>`;
    },
  } as any,
  parameters: {
    totalSlides: 100,
    storyName: 'Render External Function - renderExternal',
    controls: { include: ['enabled', 'renderExternal'] }, 
    docs: {
      description: {
        story: 'Function for external rendering (e.g. using some other library to handle DOM manipulations and state like React.js or Vue.js).',
      },
    },
  },
};

export const RenderExternalUpdate: Story = {
  args: {
    enabled: true,
    renderExternal: (data: any) => {
      // Mock external rendering function
      return `<div class="external-slide">External Slide ${data.slideIndex}</div>`;
    },
    renderExternalUpdate: false,
  } as any,
  parameters: {
    totalSlides: 100,
    storyName: 'Render External Update - renderExternalUpdate',
    controls: { include: ['enabled', 'renderExternal', 'renderExternalUpdate'] }, 
    docs: {
      description: {
        story: 'When enabled (by default) it will update Swiper layout right after renderExternal called. Useful to disable and update swiper manually when used with render libraries that renders asynchronously.',
      },
    },
  },
};

export const RenderSlideFunction: Story = {
  args: {
    enabled: true,
    slides: [
      { id: 1, content: 'Slide 1' },
      { id: 2, content: 'Slide 2' },
      { id: 3, content: 'Slide 3' },
      { id: 4, content: 'Slide 4' },
      { id: 5, content: 'Slide 5' },
    ],
    renderSlide: (slideData: any, index: number) => {
      // Mock slide rendering function
      return `<div class="swiper-slide">Custom Slide #${index}</div>`;
    },
  } as any,
  parameters: {
    totalSlides: 100,
    storyName: 'Render Slide Function - renderSlide',
    controls: { include: ['enabled', 'renderSlide', 'slides'] }, 
    docs: {
      description: {
        story: 'Function to render slide. As an argument it accepts current slide item for slides array and index number of the current slide. Function must return an outer HTML of the swiper slide or slide HTML element.',
      },
    },
  },
};

export const CustomSlidesArray: Story = {
  args: {
    enabled: true,
    slides: [
      { id: 1, content: 'Slide 1' },
      { id: 2, content: 'Slide 2' },
      { id: 3, content: 'Slide 3' },
      { id: 4, content: 'Slide 4' },
      { id: 5, content: 'Slide 5' },
    ],
  } as any,
  parameters: {
    storyName: 'Custom Slides Array - slides',
    controls: { include: ['enabled', 'slides'] }, 
    docs: {
      description: {
        story: 'Array with slides',
      },
    },
  },
};

export const SlidesPerViewAutoSlideSize: Story = {
  args: {
    enabled: true,
    slidesPerView: 'auto',
    slidesPerViewAutoSlideSize: 200,
  } as any,
  parameters: {
    totalSlides: 50,
    storyName: 'Slides Per View Auto Slide Size - slidesPerViewAutoSlideSize',
    controls: { include: ['enabled', 'slidesPerView', 'slidesPerViewAutoSlideSize'] }, 
    docs: {
      description: {
        story: 'Slide size for slidesPerView: auto (in px)',
      },
    },
  },
};