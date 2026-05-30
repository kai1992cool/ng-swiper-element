import { Meta, StoryObj } from "@storybook/angular";
import { navigationSharedMeta } from "./navigation-shared";

const meta: Meta = {
    ...navigationSharedMeta,
  title: 'Ng Swiper Element/Features/Navigation/Properties & Methods',
}

export default meta;
type Story = StoryObj;

export const NavigationPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    hideOnClick: true,
  } as any,
  parameters: {
    storyName: 'Navigation properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'hideOnClick'] },
    docs: {
      description: {
        story: 'Showcase of properties and methods',
      },
    },
  },
};
