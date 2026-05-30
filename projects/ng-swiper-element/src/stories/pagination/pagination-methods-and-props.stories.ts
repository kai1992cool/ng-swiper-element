import { Meta, StoryObj } from "@storybook/angular";
import { paginationSharedMeta } from "./pagination-shared";

const meta: Meta = {
    ...paginationSharedMeta,
  title: 'Ng Swiper Element/Features/Pagination/Properties & Methods',
}

export default meta;
type Story = StoryObj;

export const PaginationPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    hideOnClick: true,
  } as any,
  parameters: {
    storyName: 'Pagination properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'hideOnClick'] },
    docs: {
      description: {
        story: 'Showcase of properties and methods',
      },
    },
  },
};