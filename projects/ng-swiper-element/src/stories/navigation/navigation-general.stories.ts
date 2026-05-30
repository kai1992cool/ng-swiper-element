import { Meta, StoryObj } from "@storybook/angular";
import { navigationSharedMeta } from "./navigation-shared";

const meta: Meta = {
    ...navigationSharedMeta,
  title: 'Ng Swiper Element/Features/Navigation/General',
}

export default meta;
type Story = StoryObj;

export const EnableNavigation: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Navigation - navigation.enabled',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Boolean property to use with breakpoints to enable/disable navigation on certain breakpoints',
      },
    },
  },
};

export const NavigationWithHideOnClick: Story = {
  args: {
    hideOnClick: true,
  } as any,
  parameters: {
    storyName: 'Navigation with Hide on Click - navigation.hideOnClick',
    controls: { include: ['hideOnClick'] }, 
    docs: {
      description: {
        story: 'Toggle navigation buttons visibility after click on Slider\'s container',
      },
    },
  },
};

export const NavigationWithoutIcons: Story = {
  args: {
    enabled: true,
    addIcons: false,
  } as any,
  parameters: {
    storyName: 'Navigation without Icons - navigation.addIcons',
    controls: { include: ['enabled', 'addIcons'] },
    docs: {
      description: {
        story: 'Boolean property to add SVG icons to navigation buttons',
      },
    },
  },
};

export const NavigationCustomHTMLButtons: Story = {
  args: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  } as any,
  parameters: {
    storyName: 'Navigation with Custom HTML Buttons - navigation.nextEl & navigation.prevEl',
    showCustomNavButtons: true,
    controls: { include: ['enabled', 'nextEl', 'prevEl'] },
    docs: {
      description: {
        story: 'String with CSS selector or HTML element of the element that will work like "next" & "prev" button after click on it',
      },
    },
  },
};