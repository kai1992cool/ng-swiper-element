import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, flipEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Flip Effect',
  argTypes: flipEffectArgTypes,
};

export default meta;

export const FlipGeneral: Story = {
  args: {
    slideShadows: true,
    limitRotation: true,
  } as any,
  parameters: {
    storyName: 'Flip Effect - General',
    effect: 'flip',
    effectConfigKey: 'flipEffect',
    argTypes: flipEffectArgTypes,
    controls: { include: ['slideShadows', 'limitRotation'] },
    docs: {
      description: {
        story: '3D Flip transition effect.',
      },
    },
  },
};
