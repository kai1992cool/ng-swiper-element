import { Meta, StoryObj } from "@storybook/angular";
import { keyboardSharedMeta } from "./keyboard-shared";

const meta: Meta = {
  ...keyboardSharedMeta,
  title: 'Ng Swiper Element/Features/Keyboard Control/Events',
};

export default meta;
type Story = StoryObj;

export const KeyboardEvents: Story = {
  args: {
    enabled: true,
    onlyInViewport: true,
  } as any,
  parameters: {
    storyName: 'Keyboard Control events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'onlyInViewport'] },
    docs: {
      description: {
        story: 'Showcase of events emitted by Swiper element when keys are pressed (e.g. keyPress event).',
      },
    },
  },
};