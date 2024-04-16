import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import '../src/app/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
