import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { VideoComponent } from '..';

test('renders video cards', () => {
  const mockOpenModal = jest.fn();
  const mockCloseModal = jest.fn();

  jest.spyOn(React, 'useEffect').mockImplementation(() => {});
  jest
    .spyOn(React, 'useState')
    .mockReturnValueOnce([false, mockOpenModal])
    .mockReturnValueOnce([true, mockCloseModal]);

  render(<VideoComponent />);

  const videoCards = screen.getAllByTestId(/video-card-/);
  fireEvent.click(videoCards[0]);
  expect(mockOpenModal).toHaveBeenCalledTimes(1);
});
