import { Meta, StoryObj } from "@storybook/angular";
import { historyNavigationSharedMeta } from "./history-navigation-shared";

const meta: Meta = {
  ...historyNavigationSharedMeta,
  title: 'Ng Swiper Element/Features/History Navigation/Events',
};

export default meta;
type Story = StoryObj;

export const HistoryNavigationEvents: Story = {
  args: {
    key: 'slides',
    replaceState: false,
  } as any,
  parameters: {
    storyName: 'History Navigation events demo',
    eventsShowcase: true,
    controls: { include: ['key', 'replaceState'] },
    docs: {
      description: {
        story: 'Showcase of events emitted on history state changes (e.g. historyChange and historySet events).',
      },
    },
  },
};