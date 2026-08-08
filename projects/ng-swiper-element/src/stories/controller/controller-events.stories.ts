import { Meta, StoryObj } from "@storybook/angular";
import { controllerSharedMeta } from "./controller-shared";

const meta: Meta = {
  ...controllerSharedMeta,
  title: 'Ng Swiper Element/Features/Controller/Events',
};

export default meta;
type Story = StoryObj;

export const ControllerEvents: Story = {
  args: {
    by: 'slide',
    inverse: false,
  } as any,
  parameters: {
    storyName: 'Controller events demo',
    eventsShowcase: true,
    controls: { include: ['by', 'inverse'] },
    docs: {
      description: {
        story: 'Showcase of events emitted on primary swiper interaction while synchronized with the controlled target swiper.',
      },
    },
  },
};