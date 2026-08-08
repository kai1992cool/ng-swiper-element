import { Meta, StoryObj } from "@storybook/angular";
import { historyNavigationSharedMeta } from "./history-navigation-shared";

const meta: Meta = {
  ...historyNavigationSharedMeta,
  title: 'Ng Swiper Element/Features/History Navigation/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const HistoryNavigationPropertiesAndMethods: Story = {
  args: {
    key: 'demo-slides',
    replaceState: false,
  } as any,
  parameters: {
    storyName: 'History Navigation properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['key', 'replaceState'] },
    docs: {
      description: {
        story: 'Interactive showcase for programmatically checking History Navigation status and controlling slide navigation synced with History API.',
      },
    },
  },
};