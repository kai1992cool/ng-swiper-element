import { Meta, StoryObj } from "@storybook/angular";
import { autoplaySharedMeta } from "./autoplay-shared";

const meta: Meta = {
    ...autoplaySharedMeta,
  title: 'Ng Swiper Element/Features/Autoplay/Events',
}

export default meta;
type Story = StoryObj;

export const AutoplayEvents: Story = {
  args: {
    enabled: true,
    draggable: true,
  } as any,
  parameters: {
    storyName: 'Autoplay events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'draggable'] },
    docs: {
      description: {
        story: 'Showcase of events emitted by swiper element on autoplay actions',
      },
    },
  },
};