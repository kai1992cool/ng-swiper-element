import { Meta, StoryObj } from "@storybook/angular";
import { navigationSharedMeta } from "./navigation-shared";

const meta: Meta = {
    ...navigationSharedMeta,
  title: 'Ng Swiper Element/Features/Navigation/Events',
}

export default meta;
type Story = StoryObj;

export const NavigationEvents: Story = {
  args: {
    enabled: true,
    hideOnClick: true,
  } as any,
  parameters: {
    storyName: 'Navigation events demo - `navigationHide`, `navigationShow`, `navigationNext`, `navigationPrev`',
    eventsShowcase: true,
    controls: { include: ['enabled', 'hideOnClick'] },
    docs: {
      description: {
        story: 'Showcase of events like `navigationHide`, `navigationShow`, `navigationNext`, `navigationPrev` emitted by swiper element on navigation actions',
      },
    },
  },
};
