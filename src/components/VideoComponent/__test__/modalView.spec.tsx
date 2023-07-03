import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ModalView } from '../ModalView';

test('renders modal view and closes it', () => {
  const mockSetIsOpen = jest.fn();

  render(<ModalView isOpen={true} setIsOpen={mockSetIsOpen} />);

  const closeIcon = screen.getByTestId('modal-close-icon');
  fireEvent.click(closeIcon);

  expect(mockSetIsOpen).toHaveBeenCalledTimes(1);
  expect(mockSetIsOpen).toHaveBeenCalledWith(false);
});
