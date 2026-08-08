import { Meta, StoryObj } from "@storybook/angular";
import { zoomSharedMeta } from "./zoom-shared";

const meta: Meta = {
  ...zoomSharedMeta,
  title: 'Ng Swiper Element/Features/Zoom/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const ZoomPropertiesAndMethods: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: true,
  } as any,
  parameters: {
    storyName: 'Zoom properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['maxRatio', 'minRatio', 'toggle'] },
    docs: {
      description: {
        story: 'Showcase of interactive API methods and properties for controlling the zoom module programmatically.',
      },
    },
  },
};