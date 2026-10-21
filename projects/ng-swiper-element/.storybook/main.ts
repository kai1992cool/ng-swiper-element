const config = {
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
  managerHead: (head: any) => `
    ${head}
    <script>
      document.title = 'NG Swiper Element';
    </script>
  `,
  features: {
    sidebarOnboardingChecklist: false,
  },
};
module.exports = config;