import { Meta, StoryObj } from "@storybook/angular";
import { historyNavigationSharedMeta } from "./history-navigation-shared";

const meta: Meta = {
  ...historyNavigationSharedMeta,
  title: 'Ng Swiper Element/Features/History Navigation/General',
};

export default meta;
type Story = StoryObj;

export const DefaultHistoryNavigation: Story = {
  args: {
    key: 'slides',
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Default History Navigation - history.key',
    controls: { include: ['key', 'enabled'] },
    docs: {
      description: {
        story: 'Enables HTML5 History navigation. Each slide receives its own browser URL path combined with data-history attribute.',
      },
    },
  },
};

export const ReplaceState: Story = {
  args: {
    key: 'slides',
    replaceState: true,
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Replace State - history.replaceState',

    controls: { include: ['key', 'replaceState', 'enabled'] },
    docs: {
      description: {
        story: 'Replaces current URL state in browser history instead of creating new history entries upon slide change.',
      },
    },
  },
};

export const CustomRootPath: Story = {
  args: {
    key: 'gallery',
    root: '/app',
    enabled: true,
  } as any,
  parameters: {
    storyName: 'Custom Root Path - history.root',

    controls: { include: ['key', 'root', 'enabled'] },
    docs: {
      description: {
        story: 'Appends root URL prefix path to history push state paths.',
      },
    },
  },
};

export const KeepQuery: Story = {
  args: {
    key: 'slides',
    enabled: true,
    keepQuery: true,
  } as any,
  parameters: {
    storyName: 'Keep Query Parameters - history.keepQuery',
    controls: { include: ['key', 'enabled', 'keepQuery'] },
    docs: {
      description: {
        story: 'Preserves existing query parameters when navigating between slides in browser history.',
      },
    },
  },
};
