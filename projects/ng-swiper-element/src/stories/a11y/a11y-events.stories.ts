import { Meta, StoryObj } from "@storybook/angular";
import { a11ySharedMeta } from "./a11y-shared";

const meta: Meta = {
  ...a11ySharedMeta,
  title: 'Ng Swiper Element/Features/Accessibility/Events',
};

export default meta;
type Story = StoryObj;

export const AccessibilityEvents: Story = {
  args: {
    enabled: true,
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  } as any,
  parameters: {
    storyName: 'Accessibility events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'prevSlideMessage', 'nextSlideMessage'] },
    docs: {
      description: {
        story: 'Showcase of slide change and navigation events while screen reader accessibility announcements are active.',
      },
    },
  },
};