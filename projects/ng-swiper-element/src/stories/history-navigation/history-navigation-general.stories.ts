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
    replaceState: false,
    enabled: true,
    keepQuery: false,
  } as any,
  parameters: {
    storyName: 'Default History Navigation - history.key',
    controls: { include: ['key', 'replaceState', 'enabled', 'keepQuery'] },
    docs: {
      description: {
        story: 'Enables HTML5 History PushState navigation. Each slide receives its own browser URL path combined with data-history attribute.',
      },
    },
  },
};

export const ReplaceState: Story = {
  args: {
    key: 'slides',
    replaceState: true,
    enabled: true,
    keepQuery: false,
  } as any,
  parameters: {
    storyName: 'Replace State - history.replaceState',

    controls: { include: ['key', 'root', 'replaceState', 'enabled', 'keepQuery'] },
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
    replaceState: false,
    enabled: true,
    keepQuery: false,
  } as any,
  parameters: {
    storyName: 'Custom Root Path - history.root',

    controls: { include: ['key', 'root', 'replaceState', 'enabled', 'keepQuery'] },
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
    replaceState: false,
    enabled: true,
    keepQuery: true,
  } as any,
  parameters: {
    storyName: 'Keep Query Parameters - history.keepQuery',
    controls: { include: ['key', 'replaceState', 'enabled', 'keepQuery'] },
    docs: {
      description: {
        story: 'Preserves existing query parameters when navigating between slides in browser history.',
      },
    },
  },
};
