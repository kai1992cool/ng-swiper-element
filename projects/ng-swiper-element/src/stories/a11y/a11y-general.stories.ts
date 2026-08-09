import { Meta, StoryObj } from "@storybook/angular";
import { a11ySharedMeta } from "./a11y-shared";

const meta: Meta = {
  ...a11ySharedMeta,
  title: 'Ng Swiper Element/Features/Accessibility/General',
};

export default meta;
type Story = StoryObj;

export const DefaultAccessibility: Story = {
  args: {
    enabled: true,
    containerMessage: 'Featured product carousel',
  } as any,
  parameters: {
    storyName: 'Default Accessibility - a11y.enabled',
    controls: { include: ['enabled', 'containerMessage'] }, 
    docs: {
      description: {
        story: 'Enables default screen reader accessibility labels and ARIA attribute management across slides and controls.',
      },
    },
  },
};

export const CustomNavigationMessages: Story = {
  args: {
    enabled: true,
    prevSlideMessage: 'Previous slide card',
    nextSlideMessage: 'Next slide card',
    firstSlideMessage: 'This is the very first slide',
    lastSlideMessage: 'This is the last slide available',
  } as any,
  parameters: {
    storyName: 'Custom Navigation Messages',
    controls: { include: ['enabled', 'prevSlideMessage', 'nextSlideMessage', 'firstSlideMessage', 'lastSlideMessage'] }, 
    docs: {
      description: {
        story: 'Configures custom screen reader announcements for navigation buttons and boundary edges.',
      },
    },
  },
};

export const CustomPaginationAndSlideLabels: Story = {
  args: {
    enabled: true,
    paginationBulletMessage: 'Jump to slide item {{index}}',
    slideLabelMessage: 'Item {{index}} of {{slidesLength}}',
    containerMessage: 'Featured product carousel',
  } as any,
  parameters: {
    storyName: 'Custom Pagination & Slide Labels',
    controls: { include: ['enabled', 'paginationBulletMessage', 'slideLabelMessage', 'containerMessage'] },
    docs: {
      description: {
        story: 'Customizes pagination bullet descriptions and slide role announcement formats.',
      },
    },
  },
};

export const CustomNotificationClass: Story = {
  args: {
    enabled: true,
    notificationClass: 'custom-a11y-notification',
  } as any,
  parameters: {
    storyName: 'Custom Notification Class',
    controls: { include: ['enabled', 'notificationClass'] },
    docs: {
      description: {
        story: 'Sets a custom CSS class for accessibility notifications.',
      },
    },
  },
};

export const WatchSlidesProgress: Story = {
  args: {
    enabled: true,
    watchSlidesProgress: true,
  } as any,
  parameters: {
    storyName: 'Watch Slides Progress',
    controls: { include: ['enabled', 'watchSlidesProgress'] },
    docs: {
      description: {
        story: 'Enables real-time updates of accessibility labels when slides are scrolled.',
      },
    },
  },
};

export const DisabledAccessibility: Story = {
  args: {
    enabled: false,
  } as any,
  parameters: {
    storyName: 'Disabled Accessibility',
    controls: { include: ['enabled'] },
    docs: {
      description: {
        story: 'Completely disables all accessibility features.',
      },
    },
  },
};

export const CustomContainerMessage: Story = {
  args: {
    enabled: true,
    containerMessage: 'Custom carousel for product showcase',
  } as any,
  parameters: {
    storyName: 'Custom Container Message',
    controls: { include: ['enabled', 'containerMessage'] },
    docs: {
      description: {
        story: 'Sets a custom message for the main carousel container.',
      },
    },
  },
};

export const WithIdAttribute: Story = {
  args: {
    enabled: true,
    id: 'custom-swiper-id',
  } as any,
  parameters: {
    storyName: 'With ID Attribute',
    controls: { include: ['enabled', 'id'] },
    docs: {
      description: {
        story: 'Sets a custom ID attribute on the swiper wrapper element. If null, will be generated automatically.',
      },
    },
  },
};

export const ItemRoleDescriptionMessage: Story = {
  args: {
    enabled: true,
    itemRoleDescriptionMessage: 'Featured product slide',
  } as any,
  parameters: {
    storyName: 'Item Role Description Message',
    controls: { include: ['enabled', 'itemRoleDescriptionMessage'] },
    docs: {
      description: {
        story: 'Sets a message for screen readers describing the role of slide elements.',
      },
    },
  },
};

export const ScrollOnFocus: Story = {
  args: {
    enabled: true,
    scrollOnFocus: true,
  } as any,
  parameters: {
    storyName: 'Scroll on Focus',
    controls: { include: ['enabled', 'scrollOnFocus'] },
    docs: {
      description: {
        story: 'Enables scrolling to the slide that has been focused.',
      },
    },
  },
};

export const SlideRole: Story = {
  args: {
    enabled: true,
    slideRole: 'group',
  } as any,
  parameters: {
    storyName: 'Slide Role',
    controls: { include: ['enabled', 'slideRole'] },
    docs: {
      description: {
        story: 'Sets the value of the swiper slide role attribute.',
      },
    },
  },
};

export const WrapperLiveRegion: Story = {
  args: {
    enabled: true,
    wrapperLiveRegion: true,
  } as any,
  parameters: {
    storyName: 'Wrapper Live Region',
    controls: { include: ['enabled', 'wrapperLiveRegion'] },
    docs: {
      description: {
        story: 'Whether or not the swiper-wrapper should have the aria-live attribute applied to it. If true, the value will be off when autoplay is enabled, otherwise it will be polite.',
      },
    },
  },
};

