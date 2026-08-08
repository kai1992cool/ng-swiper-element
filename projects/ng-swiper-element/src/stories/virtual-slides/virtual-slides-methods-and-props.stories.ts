import { Meta, StoryObj } from "@storybook/angular";
import { virtualSlidesSharedMeta } from "./virtual-slides-shared";

const meta: Meta = {
  ...virtualSlidesSharedMeta,
  title: 'Ng Swiper Element/Features/Virtual Slides/Properties & Methods',
};

export default meta;
type Story = StoryObj;

export const VirtualSlidesPropertiesAndMethods: Story = {
  args: {
    enabled: true,
    addSlidesBefore: 2,
    addSlidesAfter: 2,
    cache: true,
  } as any,
  parameters: {
    totalSlides: 500,
    storyName: 'Virtual Slides properties and methods demo',
    propAndMethodsDemo: true,
    controls: { include: ['enabled', 'addSlidesBefore', 'addSlidesAfter', 'cache'] },
    docs: {
      description: {
        story: 'Interactive showcase for Virtual Slides methods including sliding to explicit indices, appending, prepending, clearing, and updating virtual slides.',
      },
    },
  },
};