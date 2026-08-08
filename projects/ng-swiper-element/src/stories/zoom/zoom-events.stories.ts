import { Meta, StoryObj } from "@storybook/angular";
import { zoomSharedMeta } from "./zoom-shared";

const meta: Meta = {
  ...zoomSharedMeta,
  title: 'Ng Swiper Element/Features/Zoom/Events',
};

export default meta;
type Story = StoryObj;

export const ZoomEvents: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: true,
  } as any,
  parameters: {
    storyName: 'Zoom events demo',
    eventsShowcase: true,
    controls: { include: ['maxRatio', 'minRatio', 'toggle'] },
    docs: {
      description: {
        story: 'Showcase of events emitted by the Swiper element on zoom actions (e.g. zoomChange). Double click or pinch an image to trigger the event.',
      },
    },
  },
};