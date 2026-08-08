import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, fadeEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Fade Effect',
  argTypes: fadeEffectArgTypes,
};

export default meta;

export const FadeCrossFade: Story = {
  args: {
    crossFade: true,
  } as any,
  parameters: {
    storyName: 'Fade Effect - Cross Fade',
    effect: 'fade',
    effectConfigKey: 'fadeEffect',
    argTypes: fadeEffectArgTypes,
    controls: { include: ['crossFade'] },
    docs: {
      description: {
        story: 'Enables cross-fade transition between slides.',
      },
    },
  },
};
