import { Meta, StoryObj } from "@storybook/angular";
import { hashNavigationSharedMeta } from "./hash-navigation-shared";

const meta: Meta = {
  ...hashNavigationSharedMeta,
  title: 'Ng Swiper Element/Features/Hash Navigation/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const HashNavigationPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    replaceState: false,
    watchState: true,
  } as any,
  parameters: {
    storyName: 'Hash Navigation properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'replaceState', 'watchState'] },
    docs: {
      description: {
        story: 'Interactive demo for inspecting Hash Navigation properties and triggering programmatical navigation via hash URL anchors.',
      },
    },
  },
};