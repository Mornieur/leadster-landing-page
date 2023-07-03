import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Container } from '../styles';
import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { globalViewports } from '../../../../../.storybook/themes';
import { Modal } from '..';

const remToPx = (rem: string) => {
  const fontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  );
  return rem ? `${parseFloat(rem) * fontSize}px` : '';
};

const meta = {
  title: 'components/UI/Modal',
  decorators: [
    (Story) => {
      return (
        <Container maxHeight="30rem" maxWidth="35rem">
          <Story />
        </Container>
      );
    },
  ],
  excludeStories: /.*Data$/,
  component: Modal,
  argTypes: {
    isOpen: { control: 'boolean' },
    children: { control: 'text' },
    maxWidth: { control: 'number' },
    maxHeight: { control: 'number' },
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
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Modal Example')).toBeInTheDocument();
    await expect(canvas.getByText('Modal Example')).toBeVisible();

    const modalContent = canvas.getByTestId('modal-container');
    fireEvent.click(modalContent);
    const closeButtonAfterClick = canvas.queryByText('Fechar');
    await expect(closeButtonAfterClick).not.toBeInTheDocument();

    const modalContainer = canvas.getByTestId('modal-container');
    const { maxHeight, maxWidth } = getComputedStyle(modalContainer);
    const expectedMaxHeight = '30rem';
    const expectedMaxWidth = '35rem';
    const expectedMaxHeightInPixels = remToPx(expectedMaxHeight);
    const expectedMaxWidthInPixels = remToPx(expectedMaxWidth);

    expect(maxHeight).toBe(expectedMaxHeightInPixels);
    expect(maxWidth).toBe(expectedMaxWidthInPixels);
  },
  args: {
    isOpen: true,
    children: 'Modal Example',
    maxWidth: '35rem',
    maxHeight: '30rem',
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
