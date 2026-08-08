import { Meta, StoryObj } from "@storybook/angular";
import { mousewheelSharedMeta } from "./mousewheel-shared";

const meta: Meta = {
  ...mousewheelSharedMeta,
  title: 'Ng Swiper Element/Features/Mousewheel Control/Events',
};

export default meta;
type Story = StoryObj;

export const MousewheelEvents: Story = {
  args: {
    enabled: true,
    releaseOnEdges: false,
  } as any,
  parameters: {
    storyName: 'Mousewheel Control events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'releaseOnEdges'] },
    docs: {
      description: {
        story: 'Showcase of events emitted by Swiper element when mousewheel scrolling occurs (e.g., scroll event).',
      },
    },
  },
};