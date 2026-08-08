import { Meta, StoryObj } from "@storybook/angular";
import { controllerSharedMeta } from "./controller-shared";

const meta: Meta = {
  ...controllerSharedMeta,
  title: 'Ng Swiper Element/Features/Controller/General',
};

export default meta;
type Story = StoryObj;

export const SlideBySlideControl: Story = {
  args: {
    by: 'slide',
    inverse: false,
  } as any,
  parameters: {
    storyName: 'Control By Slide - controller.by: "slide"',
    controls: { include: ['by', 'inverse'] }, 
    docs: {
      description: {
        story: 'Controls the target slider slide-by-slide relative to the primary slider.',
      },
    },
  },
};

export const ContainerPercentageControl: Story = {
  args: {
    by: 'container',
    inverse: false,
  } as any,
  parameters: {
    storyName: 'Control By Container - controller.by: "container"',
    controls: { include: ['by', 'inverse'] }, 
    docs: {
      description: {
        story: 'Controls the target slider position based on the total slider scroll percentage.',
      },
    },
  },
};

export const InverseDirectionControl: Story = {
  args: {
    by: 'slide',
    inverse: true,
  } as any,
  parameters: {
    storyName: 'Inverse Direction - controller.inverse: true',
    controls: { include: ['by', 'inverse'] }, 
    docs: {
      description: {
        story: 'Controls target slider transitions in the inverse direction when sliding the primary swiper.',
      },
    },
  },
};