import { Meta, StoryObj } from "@storybook/angular";
import { autoplaySharedMeta } from "./autoplay-shared";

const meta: Meta = {
    ...autoplaySharedMeta,
  title: 'Ng Swiper Element/Features/Autoplay/Properties & Methods',
}

export default meta;
type Story = StoryObj;

export const AutoplayPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    hide: true,
  } as any,
  parameters: {
    storyName: 'Autoplay properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'hide'] },
    docs: {
      description: {
        story: 'Showcase of properties and methods',
      },
    },
  },
};