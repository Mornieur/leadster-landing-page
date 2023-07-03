import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from '..';

test('renders the Header component', () => {
  render(<Header />);

  const minTextElement = screen.getByText('WEBNARS EXCLUSIVOS');
  expect(minTextElement).toBeInTheDocument();

  const minTitleElement = screen.getByText('Menos Conversinha,');
  expect(minTitleElement).toBeInTheDocument();

  const maxTitleElement = screen.getByText('Mais Conversão');
  expect(maxTitleElement).toBeInTheDocument();

  const logoImage = screen.getByAltText('logo');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('width', '200');
  expect(logoImage).toHaveAttribute('height', '100');

  const assetHeaderImage = screen.getByAltText('asset');
  expect(assetHeaderImage).toBeInTheDocument();
  expect(assetHeaderImage).toHaveAttribute('width', '40');
  expect(assetHeaderImage).toHaveAttribute('height', '40');

  expect(minTextElement).toHaveStyle('color: var(--leadster-color)');
  expect(minTitleElement).toHaveStyle('padding: 0.5rem; font-size: 4rem');
  expect(maxTitleElement).toHaveStyle(
    'color: var(--leadster-color); font-size: 6rem'
  );
});
