import { Meta, StoryObj } from "@storybook/angular";
import { paginationSharedMeta } from "./pagination-shared";

const meta: Meta = {
    ...paginationSharedMeta,
  title: 'Ng Swiper Element/Features/Pagination/General',
}

export default meta;
type Story = StoryObj;

export const EnablePagination: Story = {
  args: {
    type: 'bullets',
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Pagination',
    controls: { include: ['type', 'enabled'] }, 
    docs: {
      description: {
        story: 'Enable pagination with bullets type. Bullets are clickable by default, allowing users to jump to specific slides.',
      },
    },
  },
};

export const PaginationBulletElement: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    bulletElement: 'p',
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination bullet element HTML Tag - pagination.bulletElement',
    controls: { include: ['enabled', 'type', 'bulletElement'] },
    docs: {
      description: {
        story: 'Defines which HTML tag will be used to represent single pagination bullet. Only for \'bullets\' pagination type.',
      },
    },
  },
};

export const PaginationBulletClickable: Story = {
  args: {
    enabled: true,
    type: 'bullets',
    clickable: true,
  } as any,
  argTypes: {
    type: {
      control: { disable: true, },
    },
  },
  parameters: {
    storyName: 'Pagination bullet clickable - pagination.clickable',
    controls: { include: ['enabled', 'type', 'clickable'] },
    docs: {
      description: {
        story: 'If true then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type',
      },
    },
  },
};