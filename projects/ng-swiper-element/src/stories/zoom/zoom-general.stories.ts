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

export const DisableToggleOnDoubleTap: Story = {
  args: {
    maxRatio: 3,
    minRatio: 1,
    toggle: false,
  } as any,
  parameters: {
    storyName: 'Disable Double Tap - zoom.toggle: false',
    controls: { include: ['toggle'] }, 
    docs: {
      description: {
        story: 'Set toggle to false to disable automatic zoom-in when double tapping or double clicking on the slide image.',
      },
    },
  },
};