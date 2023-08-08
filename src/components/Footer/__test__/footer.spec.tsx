import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '..';
import FooterProvider from '@/contexts/footer/footerProvider';

describe('Footer', () => {
  test('renders Footer correctly', () => {
    render(
      <FooterProvider>
        <Footer />
      </FooterProvider>
    );

    expect(
      screen.getByText('Transformando visitantes em clientes.')
    ).toBeInTheDocument();
    expect(screen.getByText('Geração de Leads B2B')).toBeInTheDocument();
  });
});
