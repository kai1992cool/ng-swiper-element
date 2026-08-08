import { Meta, StoryObj } from "@storybook/angular";
import { gridSharedMeta } from "./grid-shared";

const meta: Meta = {
  ...gridSharedMeta,
  title: 'Ng Swiper Element/Features/Grid/General',
};

export default meta;
type Story = StoryObj;

export const GridRows: Story = {
  args: {
    rows: 2,
    fill: 'column',
  } as any,
  parameters: {
    storyName: 'Grid Rows - grid.rows',
    controls: { include: ['rows', 'fill'] }, 
    docs: {
      description: {
        story: 'Number of slide rows for multirow layout. Sets up multi-row display when combined with slidesPerView.',
      },
    },
  },
};

export const GridFillColumn: Story = {
  args: {
    rows: 2,
    fill: 'column',
  } as any,
  parameters: {
    storyName: 'Grid Fill Column - grid.fill: "column"',
    controls: { include: ['rows', 'fill'] }, 
    docs: {
      description: {
        story: 'Fills the grid layout column by column sequentially.',
      },
    },
  },
};

export const GridFillRow: Story = {
  args: {
    rows: 2,
    fill: 'row',
  } as any,
  parameters: {
    storyName: 'Grid Fill Row - grid.fill: "row"',
    controls: { include: ['rows', 'fill'] }, 
    docs: {
      description: {
        story: 'Fills the grid layout row by row sequentially.',
      },
    },
  },
};