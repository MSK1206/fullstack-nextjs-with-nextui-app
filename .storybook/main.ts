import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/app/components/**/**/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/app/components/**/**/**/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@chromatic-com/storybook',
  ],
  features: {
    experimentalRSC: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  core: {
    enableCrashReports: true, // 👈 Appends the crash reports to the telemetry events
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['..\\public'],
};
export default config;
