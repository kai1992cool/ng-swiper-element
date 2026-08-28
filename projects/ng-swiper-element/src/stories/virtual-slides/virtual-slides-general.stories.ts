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

export const CustomSlidesString: Story = {
  args: {
    enabled: true,
    slides: Array.from({ length: 100 }, (_, i) => `Slide ${i + 1}`),
  } as any,
  parameters: {
    totalSlides: 100,
    storyName: 'String Slides',
    controls: { include: ['enabled', 'slides'] },
    docs: {
      description: {
        story: 'Array of string slides - simplest form of slide data where each slide is just a text string.',
      },
    },
  },
};

export const CustomSlidesHtml: Story = {
  args: {
    enabled: true,
    slides: Array.from({ length: 100 }, (_, i) =>
      `<div class="swiper-slide" style="display: flex; gap:10px;flex-direction:column;"><h3>Slide ${i + 1}</h3><p>HTML Content</p></div>`
    ),
  } as any,
  parameters: {
    totalSlides: 100,
    storyName: 'HTML Slides',
    controls: { include: ['enabled', 'slides'] },
    docs: {
      description: {
        story: 'Array of HTML string slides - more complex slide data with HTML content structure.',
      },
    },
  },
};

export const CustomSlidesObject: Story = {
  args: {
    enabled: true,
    slides: Array.from({ length: 100 }, (_, i) => ({
      id: i,
      title: `Slide ${i + 1}`,
      image: `https://placehold.co/600x400?text=Slide+${i + 1}`,
      description: `Description for slide ${i + 1}`
    })),
    renderSlide: (slide: any, index: number) => {
      return `
        <div class="swiper-slide" style="display:flex; align-items:center; justify-content:center;">
          <div style="text-align:center;">
            <img src="${slide.image}" style="max-width:100%; display:block; margin:0 auto 10px;" />
            <strong>${slide.title}</strong>
            <p>${slide.description}</p>
          </div>
        </div>
      `;
    }
  } as any,
  parameters: {
    storyName: 'Object Slides',
    controls: { include: ['enabled', 'slides', 'renderSlide'] },
    docs: {
      description: {
        story: 'Array of object slides - best for complex slide data with multiple properties that need to be rendered.',
      },
    },
  },
};

export const RenderExternalFunction: Story = {
  args: {
    enabled: true,
    renderExternalUpdate: false,
    renderExternal: function (data: any) {
      // Update component state with the slides Swiper wants to render
      // data.slides contains the HTML strings or objects to display
      if ((this as any)?.virtualData !== undefined) {
        (this as any).virtualData = data.slides;
        (this as any).offset = data.offset;
        (this as any).fromIndex = data.from;
      }
    }
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
    renderExternalUpdate: true,
    renderExternal: function (data: any) {
      // Update component state with the slides Swiper wants to render
      // data.slides contains the HTML strings or objects to display
      if ((this as any)?.virtualData !== undefined) {
        (this as any).virtualData = data.slides;
        (this as any).offset = data.offset;
        (this as any).fromIndex = data.from;
      }
    }
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
    renderSlide: (slide: any, index: number) => {
      return `
            <div class="swiper-slide" style="width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; border: 1px solid #ccc;">
              <div style="text-align: center;">
                <h3>${slide.id}</h3>
                <p>${slide.content}</p>
              </div>
            </div>
          `;
    }
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

export const SlidesPerViewAutoSlideSize: Story = {
  args: {
    enabled: true,
    slidesPerView: 'auto',
    slides: Array.from({ length: 1000 }, (_, i) => `Slide ${i + 1}`),

    // CRITICAL: Define the fixed width Swiper should assume for calculations
    slidesPerViewAutoSlideSize: 320,

    renderSlide: (slide: any, index: number) => {
      return `
        <div class="swiper-slide">
          ${slide}
        </div>
      `;
    }
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