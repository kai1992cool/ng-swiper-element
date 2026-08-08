import { Meta, StoryObj } from "@storybook/angular";
import { keyboardSharedMeta } from "./keyboard-shared";

const meta: Meta = {
  ...keyboardSharedMeta,
  title: 'Ng Swiper Element/Features/Keyboard Control/General',
};

export default meta;
type Story = StoryObj;

export const EnableKeyboardControl: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Keyboard Control - keyboard.enabled',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Enables keyboard control to navigate between slides using arrow keys.',
      },
    },
  },
};

export const OnlyInViewport: Story = {
  args: {
    enabled: true,
    onlyInViewport: true,
  } as any,
  parameters: {
    storyName: 'Only In Viewport - keyboard.onlyInViewport',
    controls: { include: ['enabled', 'onlyInViewport'] }, 
    docs: {
      description: {
        story: 'When set to true, keyboard control will only handle keypress events when the Swiper slider is inside the active viewport.',
      },
    },
  },
};

export const PageUpDown: Story = {
  args: {
    enabled: true,
    pageUpDown: true,
  } as any,
  parameters: {
    storyName: 'Page Up Down Navigation - keyboard.pageUpDown',
    controls: { include: ['enabled', 'pageUpDown'] }, 
    docs: {
      description: {
        story: 'Enables slide navigation via Page Up and Page Down keys in addition to Arrow keys.',
      },
    },
  },
};