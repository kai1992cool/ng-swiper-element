import { Meta, StoryObj } from "@storybook/angular";
import { hashNavigationSharedMeta } from "./hash-navigation-shared";

const meta: Meta = {
  ...hashNavigationSharedMeta,
  title: 'Ng Swiper Element/Features/Hash Navigation/Events',
};

export default meta;
type Story = StoryObj;

export const HashNavigationEvents: Story = {
  args: {
    enabled: true,
    watchState: true,
  } as any,
  parameters: {
    storyName: 'Hash Navigation events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'watchState'] },
    docs: {
      description: {
        story: 'Showcase of events emitted on hash navigation changes (e.g. hashChange and hashSet events).',
      },
    },
  },
};