import { Meta, StoryObj } from "@storybook/angular";
import { zoomSharedMeta } from "./zoom-shared";

const meta: Meta = {
    ...zoomSharedMeta,
  title: 'Ng Swiper Element/Features/Zoom/Styling',
}

export default meta;
type Story = StoryObj;

export const ContainerClass: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: true,
    containerClass: 'swiper-zoom-container-custom',
  } as any,
  parameters: {
    containerZoomCustom: true,
    storyName: 'Container Class',
    controls: { include: ['maxRatio', 'minRatio', 'toggle', 'containerClass'] }, 
    docs: {
      description: {
        story: 'CSS class name of zoom container.',
      },
    },
  },
};

// Apply styles to the stories
export const ZoomedSlideClass: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: true,
    zoomedSlideClass: 'is-currently-zoomed',
  } as any,
  parameters: {
    storyName: 'Zoomed Slide Class',
    controls: { include: ['maxRatio', 'minRatio', 'toggle', 'zoomedSlideClass'] }, 
    docs: {
      description: {
        story: 'CSS class name of zoomed in container.',
      },
    },
  },
};