import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { Container } from '../styles';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { globalViewports } from '../../../../.storybook/themes';
import { FormComponent } from '..';

const meta = {
  title: 'components/FormComponent',
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
  component: FormComponent,
  argTypes: {
    title: { control: 'text' },
    strongTitle: { control: 'text' },
    information: { control: 'text' },
    textButton: { control: 'text' },
    strongInformation: { control: 'text' },
    cardText: { control: 'text' },
    strongCardText: { control: 'text' },
    satisfactionText: { control: 'text' },
    strongSatisfactionText: { control: 'text' },
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
} satisfies Meta<typeof FormComponent>;

export default meta;

type Story = StoryObj<typeof FormComponent>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByText('Pronto para triplicar sua')
    ).toBeInTheDocument();
    await expect(canvas.getByText('Pronto para triplicar sua')).toBeVisible();

    await expect(canvas.getByText('Geração de Leads?')).toBeInTheDocument();
    await expect(canvas.getByText('Geração de Leads?')).toBeVisible();

    await expect(canvas.getByText('Criação e ativação em')).toBeInTheDocument();
    await expect(canvas.getByText('Criação e ativação em')).toBeVisible();
    await expect(canvas.getByText('4 minutos.')).toBeInTheDocument();
    await expect(canvas.getByText('4 minutos.')).toBeVisible();

    await expect(canvas.getByText('VER DEMONSTRAÇÃO')).toBeInTheDocument();
    await expect(canvas.getByText('Não')).toBeInTheDocument();
    await expect(
      canvas.getByText('é necessário Cartão de Crédito')
    ).toBeInTheDocument();
    await expect(
      canvas.getByText('/5 média de satisfação')
    ).toBeInTheDocument();
    await expect(canvas.getByText('4.9')).toBeInTheDocument();

    const seloStationImage = canvas.getByAltText('selo rd station');

    await expect(seloStationImage).toBeInTheDocument();
    await expect(seloStationImage).toBeVisible();
    await expect(seloStationImage).toHaveAttribute('width', '150');
    await expect(seloStationImage).toHaveAttribute('height', '150');
    await expect(seloStationImage).toHaveAttribute('alt', 'selo rd station');

    const noCardImage = canvas.getByAltText('imagem de cartão');

    await expect(noCardImage).toBeInTheDocument();
    await expect(noCardImage).toBeVisible();
    await expect(noCardImage).toHaveAttribute('width', '15');
    await expect(noCardImage).toHaveAttribute('height', '15');
    await expect(noCardImage).toHaveAttribute('alt', 'imagem de cartão');
  },
  args: {
    title: 'Pronto para triplicar sua',
    strongTitle: 'Geração de Leads?',
    information: 'Criação e ativação em',
    textButton: 'VER DEMONSTRAÇÃO',
    strongInformation: '4 minutos.',
    cardText: 'é necessário Cartão de Crédito',
    strongCardText: 'Não',
    satisfactionText: '/5 média de satisfação',
    strongSatisfactionText: '4.9',
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
