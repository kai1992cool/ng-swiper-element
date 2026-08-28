import { Meta, StoryObj } from "@storybook/angular";
import { scrollbarSharedMeta } from "./scrollbar-shared";

const meta: Meta = {
    ...scrollbarSharedMeta,
  title: 'Ng Swiper Element/Features/Scrollbar/Styling',
}

export default meta;
type Story = StoryObj;


export const DragClass: Story = {
  args: {
    enabled: true,
    draggable: true, 
    dragClass: 'swiper-scrollbar-drag-custom',
  } as any,
  parameters: {
    storyName: 'Drag Class Customization - Scrollbar.dragClass',
    classStory: true,
    controls: { include: ['enabled', 'dragClass', 'draggable'] },
    docs: {
      description: {
        story: 'Set to true to enable make scrollbar draggable that allows you to control slider position',
      },
    },
  },
};

export const HorizontalClass: Story = {
  args: {
    enabled: true,
    horizontalClass: 'swiper-scrollbar-horizontal-custom',
  } as any,
  parameters: {
    storyName: 'Horizontal Class Customization',
    classStory: true,
    controls: { include: ['enabled', 'horizontalClass'] },
    docs: {
      description: {
        story: 'CSS class name of horizontal scrollbar.',
      },
    },
  },
};

export const LockClass: Story = {
  args: {
    enabled: true,
    lockClass: 'swiper-scrollbar-lock-custom',
  } as any,
  parameters: {
    numberOfSlides: 1,
    storyName: 'Lock Class Customization',
    classStory: true,
    controls: { include: ['enabled', 'lockClass'] },
    docs: {
      description: {
        story: 'CSS class name of scrollbar element when there are not enough slides to scroll.',
      },
    },
  },
};

export const ScrollbarDisabledClass: Story = {
  args: {
    enabled: false,
    scrollbarDisabledClass: 'swiper-scrollbar-disabled-custom',
  } as any,
  parameters: {
    numberOfSlides: 1,
    storyName: 'Disabled Class Customization',
    classStory: true,
    controls: { include: ['enabled', 'scrollbarDisabledClass'] },
    docs: {
      description: {
        story: 'Scrollbar element additional CSS class when it is disabled',
      },
    },
  },
};

export const VerticalClass: Story = {
  args: {
    enabled: true,
    verticalClass: 'swiper-scrollbar-vertical-custom',
  } as any,
  parameters: {
    isVertical: true,
    storyName: 'Vertical Class Customization',
    classStory: true,
    controls: { include: ['enabled', 'verticalClass'] },
    docs: {
      description: {
        story: 'CSS class name of vertical scrollbar.',
      },
    },
  },
};