import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, coverflowEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Coverflow Effect',
  argTypes: coverflowEffectArgTypes,
};

export default meta;

export const CoverflowGeneral: Story = {
  args: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  } as any,
  parameters: {
    storyName: 'Coverflow Effect - General',
    effect: 'coverflow',
    effectConfigKey: 'coverflowEffect',
    argTypes: coverflowEffectArgTypes,
    controls: { include: ['rotate', 'stretch', 'depth', 'modifier', 'scale', 'slideShadows'] },
    docs: {
      description: {
        story: '3D Coverflow effect with customizable rotation, depth, stretch, and shadow options.',
      },
    },
  },
};
