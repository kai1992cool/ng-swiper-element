import { Meta, StoryObj } from "@storybook/angular";
import { manipulationSharedMeta } from "./manipulation-shared";

const meta: Meta = {
  ...manipulationSharedMeta,
  title: 'Ng Swiper Element/Features/Manipulation/General',
};

export default meta;
type Story = StoryObj;

export const AppendSlideMethod: Story = {
  parameters: {
    storyName: 'Append Slide - swiper.appendSlide()',
    activeMethod: 'appendSlide',
    docs: {
      description: {
        story: 'Adds new slides to the end of Swiper. Click "+ Append Slide" to try adding slides dynamically.',
      },
    },
  },
};

export const PrependSlideMethod: Story = {
  parameters: {
    storyName: 'Prepend Slide - swiper.prependSlide()',
    activeMethod: 'prependSlide',
    docs: {
      description: {
        story: 'Adds new slides to the beginning of Swiper. Click "+ Prepend Slide" to try prepending slides dynamically.',
      },
    },
  },
};

export const AddSlideMethod: Story = {
  parameters: {
    storyName: 'Add Slide at Index - swiper.addSlide(index, slide)',
    activeMethod: 'addSlide',
    docs: {
      description: {
        story: 'Inserts new slides at a specific index location. Click "+ Add Slide at Index 1" to insert a slide as the second item.',
      },
    },
  },
};

export const RemoveSlideMethod: Story = {
  parameters: {
    storyName: 'Remove Slide - swiper.removeSlide(index)',
    activeMethod: 'removeSlide',
    docs: {
      description: {
        story: 'Removes a specific slide or multiple slides by index position. Click "- Remove First Slide" to remove index 0.',
      },
    },
  },
};

export const RemoveAllSlidesMethod: Story = {
  parameters: {
    storyName: 'Remove All Slides - swiper.removeAllSlides()',
    activeMethod: 'removeAllSlides',
    docs: {
      description: {
        story: 'Removes all slides from the Swiper instance. Click "- Remove All Slides" to purge the container.',
      },
    },
  },
};