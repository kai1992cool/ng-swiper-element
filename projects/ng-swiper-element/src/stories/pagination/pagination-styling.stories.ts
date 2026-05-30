import { Meta, StoryObj } from "@storybook/angular";
import { paginationSharedMeta } from "./pagination-shared";

const meta: Meta = {
    ...paginationSharedMeta,
  title: 'Ng Swiper Element/Features/Pagination/Styling',
}

export default meta;
type Story = StoryObj;


export const PaginationBulletClass: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    bulletActiveClass: 'swiper-pagination-bullet-active-custom',
    bulletClass: 'swiper-pagination-bullet-custom',
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination Bullet Class Customization - Active and Remaining Bullets Classes',
    classStory: true,
    controls: { include: ['enabled', 'type', 'bulletActiveClass', 'bulletClass'] },
    docs: {
      description: {
        story: 'CSS class name of currently active and remaining pagination bullets',
      },
    },
  },
};