import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-docs",
  ],
  "framework": {
    "name": "@storybook/angular",
    options: {}
  },
  // 👇 Add this configuration to change the main document title
  managerHead: (head) => `
    ${head}
    <script>
      document.title = 'NG Swiper Element';
    </script>
  `,
  features: {
    sidebarOnboardingChecklist: false,
  },
};
export default config;