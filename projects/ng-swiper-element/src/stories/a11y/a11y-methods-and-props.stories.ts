import { Meta, StoryObj } from "@storybook/angular";
import { a11ySharedMeta } from "./a11y-shared";

const meta: Meta = {
  ...a11ySharedMeta,
  title: 'Ng Swiper Element/Features/Accessibility/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const AccessibilityPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    prevSlideMessage: 'Go to previous item',
    nextSlideMessage: 'Go to next item',
  } as any,
  parameters: {
    storyName: 'Accessibility properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'prevSlideMessage', 'nextSlideMessage'] },
    docs: {
      description: {
        story: 'Interactive showcase for toggling accessibility module states dynamically using `swiper.a11y.enable()` and `swiper.a11y.disable()`.',
      },
    },
  },
};