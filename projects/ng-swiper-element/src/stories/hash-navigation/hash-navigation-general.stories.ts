import { Meta, StoryObj } from "@storybook/angular";
import { hashNavigationSharedMeta } from "./hash-navigation-shared";

const meta: Meta = {
  ...hashNavigationSharedMeta,
  title: 'Ng Swiper Element/Features/Hash Navigation/General',
};

export default meta;
type Story = StoryObj;

export const EnableHashNavigation: Story = {
  args: {
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Enable Hash Navigation - hashNavigation.enabled',
    controls: { include: ['enabled'] }, 
    docs: {
      description: {
        story: 'Enables hash navigation allowing slide transitions to sync with the URL hash fragment.',
      },
    },
  },
};

export const ReplaceState: Story = {
  args: {
    enabled: true,
    replaceState: true,
  } as any,
  parameters: {
    storyName: 'Replace State - hashNavigation.replaceState',
    controls: { include: ['enabled', 'replaceState'] }, 
    docs: {
      description: {
        story: 'Replaces the current state in browser history on slide change instead of pushing new entries into browser history.',
      },
    },
  },
};

export const WatchState: Story = {
  args: {
    enabled: true,
    watchState: true,
  } as any,
  parameters: {
    storyName: 'Watch State - hashNavigation.watchState',
    controls: { include: ['enabled', 'watchState'] }, 
    docs: {
      description: {
        story: 'Listens to browser window hash changes dynamically and navigates the slide corresponding to the hash.',
      },
    },
  },
};