import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Modal } from '..';

test('renders modal and closes it', () => {
  const mockOnClose = jest.fn();

  render(
    <Modal isOpen={true} maxWidth="28rem" maxHeight="37rem">
      <div className="title">Modal Title</div>
      <p>Modal content</p>
      <div className="buttonsDiv">
        <span>
          <button className="cancel" onClick={mockOnClose}>
            Cancel
          </button>
        </span>
      </div>
    </Modal>
  );

  const modalContainer = screen.getByTestId('modal-container');
  act(() => {
    fireEvent.click(modalContainer);
  });
});
