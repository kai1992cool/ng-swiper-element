import { Meta, StoryObj } from "@storybook/angular";
import { freeModeSharedMeta } from "./free-mode-shared";

const meta: Meta = {
  ...freeModeSharedMeta,
  title: 'Ng Swiper Element/Features/Free Mode/General',
};

export default meta;
type Story = StoryObj;

export const EnableFreeMode: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Free Mode - freeMode.enabled',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Whether the free mode is enabled. Allows slides to slide freely without fixed snap positions.',
      },
    },
  },
};

export const MinimumVelocity: Story = {
  args: {
    enabled: true,
    minimumVelocity: 0.02,
  } as any,
  parameters: {
    storyName: 'Minimum Velocity - freeMode.minimumVelocity',
    controls: { include: ['enabled', 'minimumVelocity'] }, 
    docs: {
      description: {
        story: 'Minimum touchmove-velocity required to trigger free mode momentum (default is 0.02).',
      },
    },
  },
};

export const Momentum: Story = {
  args: {
    enabled: true,
    momentum: true,
  } as any,
  parameters: {
    storyName: 'Momentum - freeMode.momentum',
    controls: { include: ['enabled', 'momentum'] }, 
    docs: {
      description: {
        story: 'If enabled, the slider will keep moving for a momentum period after you release it.',
      },
    },
  },
};

export const MomentumBounce: Story = {
  args: {
    enabled: true,
    momentum: true,
    momentumBounce: true,
  } as any,
  parameters: {
    storyName: 'Momentum Bounce - freeMode.momentumBounce',
    controls: { include: ['enabled', 'momentum', 'momentumBounce'] }, 
    docs: {
      description: {
        story: 'Set to false if you want to disable momentum bounce when reaching slider boundaries in free mode.',
      },
    },
  },
};

export const MomentumBounceRatio: Story = {
  args: {
    enabled: true,
    momentumBounce: true,
    momentumBounceRatio: 1,
  } as any,
  parameters: {
    storyName: 'Momentum Bounce Ratio - freeMode.momentumBounceRatio',
    controls: { include: ['enabled', 'momentumBounce', 'momentumBounceRatio'] }, 
    docs: {
      description: {
        story: 'Higher value means higher bounce distance when hitting edges.',
      },
    },
  },
};

export const MomentumRatio: Story = {
  args: {
    enabled: true,
    momentumRatio: 1,
  } as any,
  parameters: {
    storyName: 'Momentum Ratio - freeMode.momentumRatio',
    controls: { include: ['enabled', 'momentumRatio'] }, 
    docs: {
      description: {
        story: 'Higher value means higher slide momentum distance after you release touch or mouse drag.',
      },
    },
  },
};

export const MomentumVelocityRatio: Story = {
  args: {
    enabled: true,
    momentumVelocityRatio: 1,
  } as any,
  parameters: {
    storyName: 'Momentum Velocity Ratio - freeMode.momentumVelocityRatio',
    controls: { include: ['enabled', 'momentumVelocityRatio'] }, 
    docs: {
      description: {
        story: 'Higher value means higher slide momentum velocity after release.',
      },
    },
  },
};

export const Sticky: Story = {
  args: {
    enabled: true,
    sticky: true,
  } as any,
  parameters: {
    storyName: 'Sticky Free Mode - freeMode.sticky',
    controls: { include: ['enabled', 'sticky'] }, 
    docs: {
      description: {
        story: 'Set to true to enable snapping to the closest slide position after free-mode scrolling ends.',
      },
    },
  },
};