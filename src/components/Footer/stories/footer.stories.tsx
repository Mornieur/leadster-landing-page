import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Container } from '../styles';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { globalViewports } from '../../../../.storybook/themes';
import { Footer } from '..';

const meta = {
  title: 'components/Footer',
  decorators: [
    (Story) => {
      return (
        <Container>
          <Story />
        </Container>
      );
    },
  ],
  excludeStories: /.*Data$/,
  component: Footer,

  parameters: {
    customEventPanel: [
      {
        eventName: 'event:example',
      },
      {
        eventName: 'my:event',
        eventData: {
          opt: 23,
        },
        selector: '.selector',
      },
      {
        eventName: 'my:otherevent',
        eventData: {
          foo: 23,
        },
      },
    ],
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const logoImage = canvas.getByAltText('logo');

    await expect(logoImage).toBeInTheDocument();
    await expect(logoImage).toBeVisible();
    await expect(logoImage).toHaveAttribute('width', '200');
    await expect(logoImage).toHaveAttribute('height', '200');
    await expect(logoImage).toHaveAttribute('alt', 'logo');
  },

  parameters: {
    nextjs: {
      appDirectory: true,
    },
    viewport: {
      defaultViewport: 'someDefault',
      viewports: globalViewports,
    },
  },
};
