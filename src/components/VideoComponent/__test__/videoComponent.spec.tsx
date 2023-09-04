import React from 'react';
import { render } from '@testing-library/react';
import { VideoComponent } from '..';
import '@/store';
import fetchMock from 'jest-fetch-mock';

jest.mock('react-icons/bs', () => ({
  BsFillPlayFill: jest.fn(() => <div>MockedIcon</div>),
}));

jest.mock('../../../store', () => ({
  useVideoStore: jest.fn(() => ({
    orderBy: 'Mais Recente',
    category: null,
  })),
}));

describe('VideoComponent', () => {
  test('renders video cards and handles interactions', async () => {
    const mockOpenModal = jest.fn();
    const mockCloseModal = jest.fn();

    jest
      .spyOn(React, 'useState')
      .mockReturnValueOnce([null, mockOpenModal])
      .mockReturnValueOnce([
        { link: 'videoLink', description: 'videoDescription' },
        mockCloseModal,
      ]);

    const videos = [
      {
        id: 1,
        title: 'Video 1',
        alt: 'Video 1 alt',
        link: 'videoLink1',
        image: 'image1.jpg',
        category: 'Category A',
        createdAt: '2023-09-01T00:00:00Z',
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(videos));

    render(<VideoComponent />);
  });
});
