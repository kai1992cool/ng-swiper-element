import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, cardsEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Cards Effect',
  argTypes: cardsEffectArgTypes,
};

export default meta;

export const CardsGeneral: Story = {
  args: {
    slideShadows: true,
    rotate: true,
    perSlideRotate: 2,
    perSlideOffset: 8,
  } as any,
  parameters: {
    storyName: 'Cards Effect - General',
    effect: 'cards',
    effectConfigKey: 'cardsEffect',
    argTypes: cardsEffectArgTypes,
    controls: { include: ['slideShadows', 'rotate', 'perSlideRotate', 'perSlideOffset'] },
    docs: {
      description: {
        story: 'Stacked Cards transition effect.',
      },
    },
  },
};
