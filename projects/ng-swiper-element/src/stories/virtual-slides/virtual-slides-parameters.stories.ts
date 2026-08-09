import { Meta, StoryObj } from "@storybook/angular";
import { virtualSlidesSharedMeta } from "./virtual-slides-shared";

const meta: Meta = {
  ...virtualSlidesSharedMeta,
  title: 'Ng Swiper Element/Features/Virtual Slides/Parameters',
};

export default meta;
type Story = StoryObj;

// Story for renderExternal parameter
export const RenderExternal: Story = {
  args: {
    enabled: true,
    renderExternal: (swiper) => {
      // This simulates external rendering (like React or Vue)
      const slidesContainer = document.createElement('div');
      slidesContainer.className = 'swiper-wrapper';
      
      // Create 100 slides with external rendering
      for (let i = 0; i < 100; i++) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<div class="slide-content">Slide ${i + 1}</div>`;
        slidesContainer.appendChild(slide);
      }
      
      return slidesContainer;
    },
  } as any,
  parameters: {
    totalSlides: 100,
    storyName: 'renderExternal - External Rendering',
    controls: { include: ['enabled', 'renderExternal'] }, 
    docs: {
      description: {
        story: 'Function for external rendering (e.g. using some other library to handle DOM manipulations and state like React.js or Vue.js).',
      },
    },
  },
};

// Story for renderExternalUpdate parameter
export const RenderExternalUpdate: Story = {
  args: {
    enabled: true,
    renderExternal: (swiper) => {
      // Simulate external rendering with update disabled
      const slidesContainer = document.createElement('div');
      slidesContainer.className = 'swiper-wrapper';
      
      for (let i = 0; i < 50; i++) {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<div class="slide-content">Slide ${i + 1}</div>`;
        slidesContainer.appendChild(slide);
      }
      
      return slidesContainer;
    },
    renderExternalUpdate: false, // Disable automatic update
  } as any,
  parameters: {
    totalSlides: 50,
    storyName: 'renderExternalUpdate - Manual Update',
    controls: { include: ['enabled', 'renderExternalUpdate'] }, 
    docs: {
      description: {
        story: 'When enabled (by default) it will update Swiper layout right after renderExternal called. Useful to disable and update swiper manually when used with render libraries that renders asynchronously.',
      },
    },
  },
};

// Story for renderSlide parameter
export const RenderSlide: Story = {
  args: {
    enabled: true,
    renderSlide: (slideData, index) => {
      // Custom slide rendering function
      return `<div class="swiper-slide" style="background-color: #f0f0f0; padding: 20px; border-radius: 8px;">
        <h3>Custom Slide ${index + 1}</h3>
        <p>Data: ${slideData?.title || 'No title'}</p>
      </div>`;
    },
    slides: Array.from({ length: 20 }, (_, i) => ({
      title: `Slide ${i + 1} Title`,
    })),
  } as any,
  parameters: {
    totalSlides: 20,
    storyName: 'renderSlide - Custom Slide Rendering',
    controls: { include: ['enabled', 'renderSlide'] }, 
    docs: {
      description: {
        story: 'Function to render slide. As an argument it accepts current slide item for slides array and index number of the current slide. Function must return an outer HTML of the swiper slide or slide HTML element.',
      },
    },
  },
};

// Story for slides array parameter
export const SlidesArray: Story = {
  args: {
    enabled: true,
    slides: [
      { title: 'Slide 1', content: 'Content for slide 1' },
      { title: 'Slide 2', content: 'Content for slide 2' },
      { title: 'Slide 3', content: 'Content for slide 3' },
      { title: 'Slide 4', content: 'Content for slide 4' },
      { title: 'Slide 5', content: 'Content for slide 5' },
    ],
  } as any,
  parameters: {
    totalSlides: 5,
    storyName: 'slides - Array of Slides',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Array with slides. Defines the content and structure of each slide in the swiper.',
      },
    },
  },
};

// Story for slidesPerViewAutoSlideSize parameter
export const SlidesPerViewAutoSlideSize: Story = {
  args: {
    enabled: true,
    slidesPerView: 'auto',
    autoSlideSize: 300, // Slide size in pixels
    slides: Array.from({ length: 10 }, (_, i) => ({
      title: `Auto Slide ${i + 1}`,
    })),
  } as any,
  parameters: {
    totalSlides: 10,
    storyName: 'slidesPerView: auto - Custom Slide Size',
    controls: { include: ['enabled', 'autoSlideSize'] }, 
    docs: {
      description: {
        story: 'Slide size for slidesPerView: auto (in px). Defines the fixed width of each slide when using auto slides per view.',
      },
    },
  },
};