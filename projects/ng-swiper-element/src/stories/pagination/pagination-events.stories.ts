import { Meta, StoryObj } from "@storybook/angular";
import { paginationSharedMeta } from "./pagination-shared";

const meta: Meta = {
    ...paginationSharedMeta,
  title: 'Ng Swiper Element/Features/Pagination/Events',
}

export default meta;
type Story = StoryObj;

export const PaginationEvents: Story = {
  args: {
    enabled: true,
    hideOnClick: true,
  } as any,
  parameters: {
    storyName: 'Pagination events demo',
    eventsShowcase: true,
    controls: { include: ['enabled', 'hideOnClick'] },
    docs: {
      description: {
        story: 'Showcase of events emitted by swiper element on pagination actions',
      },
    },
  },
};