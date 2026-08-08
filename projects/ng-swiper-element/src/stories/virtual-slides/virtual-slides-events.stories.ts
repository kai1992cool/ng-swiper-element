import { Meta, StoryObj } from "@storybook/angular";
import { virtualSlidesSharedMeta } from "./virtual-slides-shared";

const meta: Meta = {
  ...virtualSlidesSharedMeta,
  title: 'Ng Swiper Element/Features/Virtual Slides/Events',
};

export default meta;
type Story = StoryObj;

export const VirtualSlidesEvents: Story = {
  args: {
    enabled: true,
    addSlidesBefore: 2,
    addSlidesAfter: 2,
  } as any,
  parameters: {
    totalSlides: 500,
    storyName: 'Virtual Slides events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'addSlidesBefore', 'addSlidesAfter'] },
    docs: {
      description: {
        story: 'Showcase of events emitted on virtual slide re-renders (e.g. virtualUpdate event).',
      },
    },
  },
};