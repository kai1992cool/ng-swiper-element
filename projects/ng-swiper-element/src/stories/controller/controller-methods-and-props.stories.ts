import { Meta, StoryObj } from "@storybook/angular";
import { controllerSharedMeta } from "./controller-shared";

const meta: Meta = {
  ...controllerSharedMeta,
  title: 'Ng Swiper Element/Features/Controller/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const ControllerPropertiesAndMethods: Story = {
  args: {
    by: 'slide',
    inverse: false,
  } as any,
  parameters: {
    storyName: 'Controller properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['by', 'inverse'] },
    docs: {
      description: {
        story: 'Interactive showcase for programmatically assigning, unlinking, or inspecting `swiper.controller.control` targets.',
      },
    },
  },
};