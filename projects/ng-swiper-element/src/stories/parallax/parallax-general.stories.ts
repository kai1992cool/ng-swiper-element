import { Meta, StoryObj } from "@storybook/angular";
import { parallaxSharedMeta } from "./parallax-shared";

const meta: Meta = {
  ...parallaxSharedMeta,
  title: 'Ng Swiper Element/Features/Parallax/General',
};

export default meta;
type Story = StoryObj;

export const DefaultParallax: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Default Parallax - parallax.enabled: true',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Enables multi-layer parallax effect using background offset, titles, subtitles, custom duration text, opacity, and scale controls.',
      },
    },
  },
};

export const DisabledParallax: Story = {
  args: {
    enabled: false,
  } as any,
  parameters: {
    storyName: 'Disabled Parallax - parallax.enabled: false',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Shows slide transitions without applying parallax movement offsets or scaling transformations.',
      },
    },
  },
};