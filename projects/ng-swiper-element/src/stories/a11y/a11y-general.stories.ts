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
  } as any,
  parameters: {
    storyName: 'Default Accessibility - a11y.enabled',
    controls: { include: ['enabled'] }, 
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

export const CustomSlideAndPaginationLabels: Story = {
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