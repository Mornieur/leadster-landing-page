import { type Meta, type StoryObj } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import React from 'react';
import { Container } from '../styles';
import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { globalViewports } from '../../../../.storybook/themes';
import { ViewComponent } from '..';

const meta = {
  title: 'components/ViewComponent',
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
  component: ViewComponent,
  argTypes: {
    orderList: { control: 'text' },
    dropDownText: { control: 'text' },
    itemText: { control: 'text' },
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
} satisfies Meta<typeof ViewComponent>;

export default meta;

type Story = StoryObj<typeof ViewComponent>;

export const Primary: Story = {
  decorators: [withKnobs],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Ordenar por')).toBeInTheDocument();
    await expect(canvas.getByText('Ordenar por')).toBeVisible();

    await expect(canvas.getByText('Data de Publicação')).toBeInTheDocument();
    await expect(canvas.getByText('Data de Publicação')).toBeVisible();
    await expect(canvas.getByText('Data de Publicação')).toBeEnabled();

    const dropdownButton = canvas.getByText('Data de Publicação');
    expect(dropdownButton).not.toBeNull();
    fireEvent.click(dropdownButton);
  },
  args: {
    orderList: text('Order List', 'Ordenar por'),
    dropDownText: text('Dropdown Text', 'Data de Publicação'),
    itemText: 'Item',
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
