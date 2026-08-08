import { Meta, StoryObj } from "@storybook/angular";
import { thumbsSharedMeta } from "./thumbs-shared";

const meta: Meta = {
  ...thumbsSharedMeta,
  title: 'Ng Swiper Element/Features/Thumbs/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const ThumbsPropertiesAndMethods: Story = {
  args: {
    autoScrollOffset: 0,
    multipleActiveThumbs: true,
  } as any,
  parameters: {
    storyName: 'Thumbs properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['autoScrollOffset', 'multipleActiveThumbs'] },
    docs: {
      description: {
        story: 'Interactive showcase of Thumbs module methods (e.g., swiper.thumbs.update()) and properties (swiper.thumbs.swiper).',
      },
    },
  },
};