import { Meta, StoryObj } from "@storybook/angular";
import { navigationSharedMeta } from "./navigation-shared";

const meta: Meta = {
    ...navigationSharedMeta,
  title: 'Ng Swiper Element/Features/Navigation/Styling',
}

export default meta;
type Story = StoryObj;

export const NavigationCustomDisabledClass: Story = {
  args: {
    enabled: false,
    navigationDisabledClass: 'swiper-navigation-disabled-custom',
  } as any,
  parameters: {
    storyName: 'Navigation with Custom Disabled Class - navigation.navigationDisabledClass',
    classStory: true,
    controls: { include: ['enabled', 'navigationDisabledClass'] },
    docs: {
      description: {
        story: 'CSS class name added on swiper container when navigation is disabled by breakpoint',
      },
    },
  },
};

export const NavigationLockClass: Story = {
  args: {
    enabled: true,
    lockClass: 'swiper-button-lock-custom',
  } as any,
  parameters: {
    storyName: 'Navigation with Custom Lock Class - navigation.lockClass',
    classStory: true,
    numberOfSlides: 1,
    controls: { include: ['enabled', 'lockClass'] },
    docs: {
      description: {
        story: 'CSS class name added to navigation button when it is disabled',
      },
    },
  },
};

export const NavigationDisabledClass: Story = {
  args: {
    enabled: true,
    disabledClass: 'swiper-button-disabled-custom',
  } as any,
  parameters: {
    storyName: 'Navigation with Custom Disabled Class - navigation.disabledClass',
    classStory: true,
    numberOfSlides: 2,
    controls: { include: ['enabled', 'disabledClass'] },
    docs: {
      description: {
        story: 'CSS class name added to navigation button when it becomes disabled',
      },
    },
  },
};

export const NavigationHiddenClass: Story = {
  args: {
    enabled: true,
    hiddenClass: 'swiper-button-hidden-custom',
    hideOnClick: true,
  } as any,
  parameters: {
    storyName: 'Navigation with Custom Hidden Class - navigation.hiddenClass',
    classStory: true,
    controls: { include: ['enabled', 'hiddenClass', 'hideOnClick'] },
    docs: {
      description: {
        story: 'CSS class name added to navigation button when it becomes hidden',
      },
    },
  },
};