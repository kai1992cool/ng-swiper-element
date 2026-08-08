import { Meta, StoryObj } from "@storybook/angular";
import { keyboardSharedMeta } from "./keyboard-shared";

const meta: Meta = {
  ...keyboardSharedMeta,
  title: 'Ng Swiper Element/Features/Keyboard Control/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const KeyboardPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  } as any,
  parameters: {
    storyName: 'Keyboard Control properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'onlyInViewport', 'pageUpDown'] },
    docs: {
      description: {
        story: 'Interactive demo for Keyboard Control methods (swiper.keyboard.enable(), swiper.keyboard.disable()) and property checking.',
      },
    },
  },
};