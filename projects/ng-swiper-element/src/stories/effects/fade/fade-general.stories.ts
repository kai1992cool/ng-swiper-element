import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, fadeEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Fade Effect',
  argTypes: fadeEffectArgTypes,
};

export default meta;

// Cross-Fade Property
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

// Mode Property
export const FadeMode: Story = {
  args: {
    mode: 'cross-fade',
  } as any,
  parameters: {
    storyName: 'Fade Effect - Mode',
    effect: 'fade',
    effectConfigKey: 'fadeEffect',
    argTypes: fadeEffectArgTypes,
    controls: { include: ['mode'] },
    docs: {
      description: {
        story: 'Set fade transition mode: "default", "cross-fade", or "out-in".',
      },
    },
  },
};

// Legacy CrossFade with Deprecated Note
export const FadeLegacyCrossFade: Story = {
  args: {
    crossFade: true,
  } as any,
  parameters: {
    storyName: 'Fade Effect - Legacy Cross Fade (Deprecated)',
    effect: 'fade',
    effectConfigKey: 'fadeEffect',
    argTypes: fadeEffectArgTypes,
    controls: { include: ['crossFade'] },
    docs: {
      description: {
        story: 'Legacy cross-fade setting. Use mode: "cross-fade" instead.',
      },
    },
  },
};