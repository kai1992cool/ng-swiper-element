import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, cubeEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Cube Effect',
  argTypes: cubeEffectArgTypes,
};

export default meta;

export const CubeGeneral: Story = {
  args: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  } as any,
  parameters: {
    storyName: 'Cube Effect - General',
    effect: 'cube',
    effectConfigKey: 'cubeEffect',
    argTypes: cubeEffectArgTypes,
    controls: { include: ['shadow', 'slideShadows', 'shadowOffset', 'shadowScale'] },
    docs: {
      description: {
        story: '3D Cube rotation transition effect.',
      },
    },
  },
};
