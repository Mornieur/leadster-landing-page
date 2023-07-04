import { GlobalStyle } from '../src/global/styles';
import * as NextImage from 'next/image';
import { setupWorker, rest } from 'msw';
import React from 'react';
import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, customViewports } from './themes';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories,
} from '@storybook/blocks';
import { initialize } from 'msw-storybook-addon';
import { themes } from '@storybook/theming';

initialize({
  onUnhandledRequest: 'bypass',
});

if (typeof global.process === 'undefined') {
  const worker = setupWorker(
    rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
      return res(ctx.json({ name: 'John Doh' }));
    })
  );
  worker.start();
}

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

const preview: Preview = {
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
      theme: themes.dark,
    },
    storySort: {
      order: ['Examples', 'Docs', 'Demo'],
    },
    viewport: {
      viewport: {
        viewports: { ...INITIAL_VIEWPORTS, ...customViewports },
      },
      defaultViewport: 'someDefault',
    },

    actions: { argTypesRegex: '^on.*' },
    options: {
      storySort: {
        order: ['Intro', 'Components'],
        method: 'alphabetical',
        locales: 'pt-BR',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === '' ? darkTheme : lightTheme;

      return (
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;

export const InputWithoutAutofill = () => <input type="text" />;

InputWithoutAutofill.parameters = {
  a11y: {
    disable: true,
    config: {
      rules: [
        {
          id: 'autocomplete-valid',
          selector: '*:not([autocomplete="nope"])',
        },
        {
          id: 'landmark-complementary-is-top-level',
          reviewOnFail: true,
        },
      ],
    },
  },
};

export const Inaccessible = () => (
  <button style={{ backgroundColor: 'red', color: 'darkRed' }}>
    Inaccessible button
  </button>
);
Inaccessible.parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
};
