import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Container } from '../styles';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { globalViewports } from '../../../../.storybook/themes';
import { Header } from '..';

const meta = {
  title: 'components/Header',
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
  component: Header,
  argTypes: {
    minText: { control: 'text' },
    minTitle: { control: 'text' },
    maxTitle: { control: 'text' },
  },
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
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Mais Conversão')).toBeInTheDocument();
    await expect(canvas.getByText('Mais Conversão')).toBeVisible();

    await expect(canvas.getByText('Menos Conversinha,')).toBeInTheDocument();
    await expect(canvas.getByText('Menos Conversinha,')).toBeVisible();

    await expect(canvas.getByText('WEBNARS EXCLUSIVOS')).toBeInTheDocument();
    await expect(canvas.getByText('WEBNARS EXCLUSIVOS')).toBeVisible();

    const logoImage = canvas.getByAltText('logo');

    await expect(logoImage).toBeInTheDocument();
    await expect(logoImage).toBeVisible();
    await expect(logoImage).toHaveAttribute('width', '200');
    await expect(logoImage).toHaveAttribute('height', '100');
    await expect(logoImage).toHaveAttribute('alt', 'logo');
  },
  args: {
    minText: 'WEBNARS EXCLUSIVOS',
    minTitle: 'Menos Conversinha,',
    maxTitle: 'Mais Conversão',
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
