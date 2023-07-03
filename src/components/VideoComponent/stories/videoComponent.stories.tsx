import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Container } from '../styles';
import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { globalViewports } from '../../../../.storybook/themes';
import { VideoComponent } from '..';

const meta = {
  title: 'components/VideoComponent',
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
  component: VideoComponent,

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
} satisfies Meta<typeof VideoComponent>;

export default meta;

type Story = StoryObj<typeof VideoComponent>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const ThumbnailImage = canvas.getAllByAltText('Thumbnail')[0];

    await expect(ThumbnailImage).toBeInTheDocument();
    await expect(ThumbnailImage).toBeVisible();
    await expect(ThumbnailImage).toHaveAttribute('height', '300');
    await expect(ThumbnailImage).toHaveAttribute('alt', 'Thumbnail');

    const firstVideoCard = canvas.getByTestId('video-card-0');
    fireEvent.mouseOver(firstVideoCard);

    fireEvent.click(firstVideoCard);
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
