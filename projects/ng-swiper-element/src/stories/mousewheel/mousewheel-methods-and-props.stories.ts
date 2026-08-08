import { Meta, StoryObj } from "@storybook/angular";
import { mousewheelSharedMeta } from "./mousewheel-shared";

const meta: Meta = {
  ...mousewheelSharedMeta,
  title: 'Ng Swiper Element/Features/Mousewheel Control/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const MousewheelPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    invert: false,
    releaseOnEdges: true,
  } as any,
  parameters: {
    storyName: 'Mousewheel Control properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'invert', 'releaseOnEdges'] },
    docs: {
      description: {
        story: 'Interactive demo for Mousewheel Control methods (swiper.mousewheel.enable(), swiper.mousewheel.disable()) and property state checks.',
      },
    },
  },
};