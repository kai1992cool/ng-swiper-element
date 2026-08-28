import { Meta, StoryObj } from "@storybook/angular";
import { thumbsSharedMeta } from "./thumbs-shared";

const meta: Meta = {
    ...thumbsSharedMeta,
  title: 'Ng Swiper Element/Features/Thumbs/Styling',
}

export default meta;
type Story = StoryObj;



export const CustomSlideThumbActiveClass: Story = {
  args: {
    slideThumbActiveClass: 'custom-thumb-active',
  } as any,
  parameters: {
    storyName: 'Custom Thumb Active Class - thumbs.slideThumbActiveClass',
    controls: { include: ['slideThumbActiveClass'] }, 
    docs: {
      description: {
        story: 'Applies a custom CSS class name to activated thumbnail slides.',
      },
    },
  },
};

export const ThumbsContainerClass: Story = {
  args: {
    thumbsContainerClass: 'swiper-thumbs-custom',
  } as any,
  parameters: {
    storyName: 'Thumbs Container Class - thumbs.thumbsContainerClass',
    controls: { include: ['thumbsContainerClass'] }, 
    docs: {
      description: {
        story: 'Additional class that will be added to thumbs swiper.',
      },
    },
  },
};