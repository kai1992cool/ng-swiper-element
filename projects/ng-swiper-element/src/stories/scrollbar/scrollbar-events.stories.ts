import { Meta, StoryObj } from "@storybook/angular";
import { scrollbarSharedMeta } from "./scrollbar-shared";

const meta: Meta = {
    ...scrollbarSharedMeta,
  title: 'Ng Swiper Element/Features/Scrollbar/Events',
}

export default meta;
type Story = StoryObj;

export const ScrollbarEvents: Story = {
  args: {
    enabled: true,
    draggable: true,
  } as any,
  parameters: {
    storyName: 'Scrollbar events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'draggable'] },
    docs: {
      description: {
        story: 'Showcase of events emitted by swiper element on scrollbar actions',
      },
    },
  },
};