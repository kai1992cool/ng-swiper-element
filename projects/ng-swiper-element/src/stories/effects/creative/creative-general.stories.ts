import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, creativeEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Creative Effect',
  argTypes: creativeEffectArgTypes,
};

export default meta;

export const CreativeGeneral: Story = {
  args: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ['100%', 0, 0],
    },
  } as any,
  parameters: {
    storyName: 'Creative Effect - Custom Transforms',
    effect: 'creative',
    effectConfigKey: 'creativeEffect',
    argTypes: creativeEffectArgTypes,
    controls: { include: ['prev', 'next', 'shadowPerProgress', 'limitProgress'] },
    docs: {
      description: {
        story: 'Creative effect allows fully custom 3D transforms for previous and next slides.',
      },
    },
  },
};
