import { Meta, StoryObj } from "@storybook/angular";
import { scrollbarSharedMeta } from "./scrollbar-shared";

const meta: Meta = {
    ...scrollbarSharedMeta,
  title: 'Ng Swiper Element/Features/Scrollbar/Properties & Methods',
}

export default meta;
type Story = StoryObj;

export const ScrollbarPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    hide: true,
  } as any,
  parameters: {
    storyName: 'Scrollbar properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'hide'] },
    docs: {
      description: {
        story: 'Showcase of properties and methods',
      },
    },
  },
};