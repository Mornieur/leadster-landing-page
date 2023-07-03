import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { FormComponent } from '../index';

test('renders FormComponent correctly', () => {
  render(<FormComponent />);

  const titleElement = screen.getByText(/Pronto para triplicar sua/i);
  const strongTitleElement = screen.getByText(/Geração de Leads/i);
  const informationElement = screen.getByText(/Criação e ativação em/i);
  const strongInformationElement = screen.getByText(/4 minutos/i);
  const buttonElement = screen.getByText(/VER DEMONSTRAÇÃO/i);
  const cardTextElement = screen.getByText(/Não/i);
  const satisfactionTextElement = screen.getByText(/4.9/i);

  expect(titleElement).toBeInTheDocument();
  expect(strongTitleElement).toBeInTheDocument();
  expect(informationElement).toBeInTheDocument();
  expect(strongInformationElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(cardTextElement).toBeInTheDocument();
  expect(satisfactionTextElement).toBeInTheDocument();
});
