import { Meta, StoryObj } from "@storybook/angular";
import { autoplaySharedMeta } from "./autoplay-shared";
import { Swiper } from "swiper/types";

const meta: Meta = {
    ...autoplaySharedMeta,
  title: 'Ng Swiper Element/Features/Autoplay/General',
}

export default meta;
type Story = StoryObj;

export const EnableAutoplay: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Autoplay - Autoplay.enabled',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Boolean property to use with breakpoints to enable/disable autoplay on certain breakpoints',
      },
    },
  },
};

export const DelayAutoplay: Story = {
  args: {
    enabled: true,
    delay: 3000,
  } as any,
  parameters: {
    storyName: 'Delay Autoplay - Autoplay.delay',
    controls: { include: ['enabled', 'delay'] }, 
    docs: {
      description: {
        story: 'Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled If you need to specify different delay for specific slides you can do it by using `data-swiper-autoplay` (in ms) attribute on slide.',
      },
    },
  },
};

export const DelayAutoplayPerSlide: Story = {
  args: {
    enabled: true,
    delay: 1000,
  } as any,
  parameters: {
    numberOfSlides: 3,
    slidesDelay: [1000, 5000, 8000],
    storyName: 'Delay Autoplay - Autoplay.delay',
    controls: { include: ['enabled', 'delay'] }, 
    docs: {
      description: {
        story: 'Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled If you need to specify different delay for specific slides you can do it by using `data-swiper-autoplay` (in ms) attribute on slide.',
      },
    },
  },
};

export const AutoplayDisableOnInteraction: Story = {
  args: {
    enabled: true,
    disableOnInteraction: false,
  } as any,
  parameters: {
    storyName: 'Autoplay Disable On Interaction - Autoplay.disableOnInteraction',
    controls: { include: ['enabled', 'delay', 'disableOnInteraction'] }, 
    docs: {
      description: {
        story: 'Set to false and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction',
      },
    },
  },
};

export const AutoplayPauseOnMouseEnter: Story = {
  args: {
    enabled: true,
    pauseOnMouseEnter: true,
  } as any,
  parameters: {
    storyName: 'Autoplay Pause On Mouse Enter - Autoplay.pauseOnMouseEnter',
    controls: { include: ['enabled', 'pauseOnMouseEnter'] }, 
    docs: {
      description: {
        story: 'When enabled autoplay will be paused on pointer (mouse) enter over Swiper container.',
      },
    },
  },
};

export const AutoplayReverseDirection: Story = {
  args: {
    enabled: true,
    reverseDirection: true,
  } as any,
  parameters: {
    storyName: 'Autoplay Reverse Direction - Autoplay.reverseDirection',
    controls: { include: ['enabled', 'reverseDirection'] }, 
    docs: {
      description: {
        story: 'Enables autoplay in reverse direction',
      },
    },
  },
};

export const AutoplayStopOnLastSlide: Story = {
  args: {
    enabled: true,
    stopOnLastSlide: true,
  } as any,
  parameters: {
    storyName: 'Autoplay Stop On Last Slide - Autoplay.stopOnLastSlide',
    controls: { include: ['enabled', 'stopOnLastSlide'] }, 
    docs: {
      description: {
        story: 'Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)',
      },
    },
  },
};

export const AutoplayWaitForTransition: Story = {
  args: {
    enabled: true,
    waitForTransition: true,
  } as any,
  parameters: {
    storyName: 'Autoplay Wait For Transition - Autoplay.waitForTransition',
    controls: { include: ['enabled', 'waitForTransition'] }, 
    docs: {
      description: {
        story: 'When enabled autoplay will wait for wrapper transition to continue. Can be disabled in case of using Virtual Translate when your slider may not have transition',
      },
    },
  },
};