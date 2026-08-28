import { Meta, StoryObj } from "@storybook/angular";
import { scrollbarSharedMeta } from "./scrollbar-shared";
import { Swiper } from "swiper/types";

const meta: Meta = {
    ...scrollbarSharedMeta,
  title: 'Ng Swiper Element/Features/Scrollbar/General',
}

export default meta;
type Story = StoryObj;

export const EnableScrollbar: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Scrollbar - Scrollbar.enabled',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Boolean property to use with breakpoints to enable/disable scrollbar on certain breakpoints',
      },
    },
  },
};

export const HideScrollbar: Story = {
  args: {
    enabled: true,
    hide: true,
  } as any,
  parameters: {
    storyName: 'Hide Scrollbar - Scrollbar.hide',
    controls: { include: ['hide', 'enabled'] }, 
    docs: {
      description: {
        story: 'Hide scrollbar automatically after user interaction',
      },
    },
  },
};

export const DraggableScrollbar: Story = {
  args: {
    enabled: true,
    draggable: true,
  } as any,
  parameters: {
    storyName: 'Draggable Scrollbar - Scrollbar.draggable',
    controls: { include: ['draggable', 'enabled'] }, 
    docs: {
      description: {
        story: 'Set to true to enable make scrollbar draggable that allows you to control slider position',
      },
    },
  },
};

export const ScrollbarDragSize: Story = {
  args: {
    enabled: true,
    draggable: true,
    dragSize: 20,
  } as any,
  parameters: {
    storyName: 'Scrollbar Drag Size - Scrollbar.dragSize',
    controls: { include: ['draggable', 'enabled', 'dragSize'] }, 
    docs: {
      description: {
        story: 'Size of scrollbar draggable element in px',
      },
    },
  },
};

export const ScrollbarSnapOnRelease: Story = {
  args: {
    enabled: true,
    draggable: true,
    snapOnRelease: true,
  } as any,
  parameters: {
    storyName: 'Scrollbar Snap on Release - Scrollbar.snapOnRelease',
    controls: { include: ['draggable', 'enabled', 'snapOnRelease'] }, 
    docs: {
      description: {
        story: 'Set to true to snap slider position to slides when you release scrollbar',
      },
    },
  },
};

export const ScrollbarCustomElement: Story = {
  args: {
    enabled: true,
    el: '.custom-scrollbar',
    draggable: true,
    snapOnRelease: true,
  } as any,
  parameters: {
    storyName: 'Scrollbar Custom Element - Scrollbar.el',
    controls: { include: ['el', 'enabled', 'draggable', 'snapOnRelease'] }, 
    docs: {
      description: {
        story: 'String with CSS selector or HTML element of the container with scrollbar.',
      },
    },
  },
};