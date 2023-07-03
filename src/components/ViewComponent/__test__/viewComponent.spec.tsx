import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ViewComponent } from '..';
import userEvent from '@testing-library/user-event';

test('renders the ViewComponent', async () => {
  render(<ViewComponent />);

  const orderListElement = screen.getByText('Ordenar por');
  expect(orderListElement).toBeInTheDocument();

  const dropDownTextElement = screen.getByText('Data de Publicação');
  expect(dropDownTextElement).toBeInTheDocument();

  const menuItems = screen.getAllByRole('button');
  expect(menuItems).toHaveLength(6);

  const ulElement = screen.getByRole('list');
  expect(ulElement).toHaveStyle('clip-path: inset(10% 50% 90% 50% round 10px)');
});
