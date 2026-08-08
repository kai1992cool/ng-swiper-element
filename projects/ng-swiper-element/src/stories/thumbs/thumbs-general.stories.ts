import { Meta, StoryObj } from "@storybook/angular";
import { thumbsSharedMeta } from "./thumbs-shared";

const meta: Meta = {
  ...thumbsSharedMeta,
  title: 'Ng Swiper Element/Features/Thumbs/General',
};

export default meta;
type Story = StoryObj;

export const DefaultThumbs: Story = {
  args: {
    autoScrollOffset: 0,
    multipleActiveThumbs: true,
  } as any,
  parameters: {
    storyName: 'Default Thumbs Gallery',
    controls: { include: ['autoScrollOffset', 'multipleActiveThumbs'] }, 
    docs: {
      description: {
        story: 'Basic thumbnail gallery binding connecting a main slider to a secondary thumbnail slider.',
      },
    },
  },
};

export const AutoScrollOffset: Story = {
  args: {
    autoScrollOffset: 1,
  } as any,
  parameters: {
    storyName: 'Auto Scroll Offset - thumbs.autoScrollOffset',
    controls: { include: ['autoScrollOffset'] }, 
    docs: {
      description: {
        story: 'Sets how many thumbs from the edge trigger automatic thumbnail gallery scrolling.',
      },
    },
  },
};

export const MultipleActiveThumbs: Story = {
  args: {
    multipleActiveThumbs: false,
  } as any,
  parameters: {
    storyName: 'Multiple Active Thumbs - thumbs.multipleActiveThumbs',
    controls: { include: ['multipleActiveThumbs'] }, 
    docs: {
      description: {
        story: 'When set to false, only a single thumbnail slide will be highlighted as active.',
      },
    },
  },
};

export const CustomSlideThumbActiveClass: Story = {
  args: {
    slideThumbActiveClass: 'custom-thumb-active',
  } as any,
  parameters: {
    storyName: 'Custom Thumb Active Class - thumbs.slideThumbActiveClass',
    controls: { include: ['slideThumbActiveClass'] }, 
    docs: {
      description: {
        story: 'Applies a custom CSS class name to activated thumbnail slides.',
      },
    },
  },
};