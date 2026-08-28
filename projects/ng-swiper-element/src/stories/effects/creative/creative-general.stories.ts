import { Meta, StoryObj } from "@storybook/angular";
import { effectsSharedMeta, creativeEffectArgTypes } from "../effects-shared";

type Story = StoryObj;

const meta: Meta = {
  ...effectsSharedMeta,
  title: 'Ng Swiper Element/Features/Effects/Creative Effect',
  argTypes: creativeEffectArgTypes,
};

export default meta;

// Progress Control Properties
export const CreativeProgressControl: Story = {
  args: {
    limitProgress: 1,
    progressMultiplier: 1,
    prev: {
      translate: ['100%', 0, -200],
      rotate: [0, 0, 90],
    },
    next: {
      translate: ['-100%', 0, -200],
      rotate: [0, 0, -90],
    },
  } as any,
  parameters: {
    slidesPerView: 2,
    storyName: 'Creative Effect - Progress Control',
    effect: 'creative',
    effectConfigKey: 'creativeEffect',
    argTypes: creativeEffectArgTypes,
    controls: { include: ['limitProgress', 'progressMultiplier', 'prev', 'next'] },
    docs: {
      description: {
        story: 'Control how progress is calculated and applied to transformations.',
      },
    },
  },
};

// Transform Properties
export const CreativeTransforms: Story = {
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
    storyName: 'Creative Effect - Transforms',
    effect: 'creative',
    effectConfigKey: 'creativeEffect',
    argTypes: creativeEffectArgTypes,
    controls: { include: ['prev', 'next'] },
    docs: {
      description: {
        story: 'Define custom transforms for previous and next slides.',
      },
    },
  },
};

// Perspective & Shadow Properties
export const CreativePerspectiveAndShadows: Story = {
  args: {
    limitProgress: 1,
    shadowPerProgress: false,
    perspective: true,  // enables 3D context
    prev: {
      translate: [0, 0, -400],   // pushes slide backward in Z
      rotate: [0, 30, 0],        // rotates around Y axis
    },
    next: {
      translate: [0, 0, -400],
      rotate: [0, -30, 0],
    },
  } as any,
  parameters: {
    slidesPerView: 1,
    storyName: 'Creative Effect - Perspective & Shadows',
    effect: 'creative',
    effectConfigKey: 'creativeEffect',
    argTypes: creativeEffectArgTypes,
    controls: { include: ['perspective', 'shadowPerProgress', 'prev', 'next', 'limitProgress'] },
    docs: {
      description: {
        story: 'Enable 3D transformations and shadow behavior control.',
      },
    },
  },
};