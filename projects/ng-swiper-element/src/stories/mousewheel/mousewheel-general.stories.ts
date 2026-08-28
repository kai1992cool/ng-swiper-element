import { Meta, StoryObj } from "@storybook/angular";
import { mousewheelSharedMeta } from "./mousewheel-shared";

const meta: Meta = {
  ...mousewheelSharedMeta,
  title: 'Ng Swiper Element/Features/Mousewheel Control/General',
};

export default meta;
type Story = StoryObj;

export const EnableMousewheelControl: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Mousewheel Control - mousewheel.enabled',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Enables navigation through slides using mouse wheel or touchpad scrolling.',
      },
    },
  },
};

export const InvertMousewheel: Story = {
  args: {
    enabled: true,
    invert: true,
  } as any,
  parameters: {
    storyName: 'Invert Scroll Direction - mousewheel.invert',
    controls: { include: ['enabled', 'invert'] }, 
    docs: {
      description: {
        story: 'Inverts the slide transition direction when scrolling with mouse wheel.',
      },
    },
  },
};

export const ForceToAxis: Story = {
  args: {
    enabled: true,
    forceToAxis: true,
  } as any,
  parameters: {
    storyName: 'Force To Axis - mousewheel.forceToAxis',
    controls: { include: ['enabled', 'forceToAxis'] }, 
    docs: {
      description: {
        story: 'Forces mousewheel swipes to strictly match the slider axis. Prevents vertical scrolling from triggering horizontal slider transitions.',
      },
    },
  },
};

export const ReleaseOnEdges: Story = {
  args: {
    enabled: true,
    releaseOnEdges: true,
  } as any,
  parameters: {
    storyName: 'Release On Edges - mousewheel.releaseOnEdges',
    controls: { include: ['enabled', 'releaseOnEdges'] }, 
    docs: {
      description: {
        story: 'Releases mousewheel events to allow standard web page scrolling once reaching the first or last slide.',
      },
    },
  },
};

export const SensitivityAndThresholds: Story = {
  args: {
    enabled: true,
    sensitivity: 1,
    thresholdDelta: 10,
    thresholdTime: 100,
  } as any,
  parameters: {
    storyName: 'Sensitivity & Thresholds - mousewheel parameters',
    controls: { include: ['enabled', 'sensitivity', 'thresholdDelta', 'thresholdTime'] }, 
    docs: {
      description: {
        story: 'Configure sensitivity multiplier, minimum scroll delta, and minimum time threshold between mousewheel events.',
      },
    },
  },
};

export const EventsTarget: Story = {
  args: {
    enabled: true,
    eventsTarget: 'body',
  } as any,
  parameters: {
    bodyClass: true,
    storyName: 'Events Target - mousewheel.eventsTarget',
    controls: { include: ['enabled', 'eventsTarget'] }, 
    docs: {
      description: {
        story: 'Specifies the container element that should receive mousewheel events. Can be a CSS selector or HTML element reference.',
      },
    },
  },
};