import { Meta, StoryObj } from "@storybook/angular";
import { zoomSharedMeta } from "./zoom-shared";

const meta: Meta = {
  ...zoomSharedMeta,
  title: 'Ng Swiper Element/Features/Zoom/General',
};

export default meta;
type Story = StoryObj;

export const DefaultZoom: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: true,
  } as any,
  parameters: {
    storyName: 'Default Zoom',
    controls: { include: ['maxRatio', 'minRatio', 'toggle'] }, 
    docs: {
      description: {
        story: 'Basic image zoom functionality. Double-click or double-tap on an image to zoom in/out.',
      },
    },
  },
};

export const CustomZoomRatio: Story = {
  args: {
    maxRatio: 5,
    minRatio: 1,
    toggle: true,
  } as any,
  parameters: {
    storyName: 'Max Ratio - zoom.maxRatio',
    controls: { include: ['maxRatio', 'minRatio'] }, 
    docs: {
      description: {
        story: 'Maximum image zoom scale factor. Here set to 5x maximum magnification.',
      },
    },
  },
};

export const PanOnMouseMove: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: true,
    panOnMouseMove: true,
  } as any,
  parameters: {
    storyName: 'Pan On Mouse Move',
    controls: { include: ['maxRatio', 'minRatio', 'toggle', 'panOnMouseMove'] }, 
    docs: {
      description: {
        story: 'When set to true, a zoomed in image will automatically pan while moving the mouse over the image.',
      },
    },
  },
};

export const LimitToOriginalSize: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: true,
    limitToOriginalSize: true,
  } as any,
  parameters: {
    storyName: 'Limit To Original Size',
    controls: { include: ['maxRatio', 'minRatio', 'toggle', 'limitToOriginalSize'] }, 
    docs: {
      description: {
        story: 'When set to true, the image will not be scaled past 100% of its original size.',
      },
    },
  },
};