import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '..';

describe('Footer', () => {
  test('renders Footer correctly', () => {
    render(<Footer />);

    const textElement = screen.getByText(
      'Transformando visitantes em clientes.'
    );
    expect(textElement).toBeInTheDocument();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Ferramenta')).toBeInTheDocument();
    expect(screen.getByText('Preços')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();

    expect(screen.getByText('Geração de Leads B2B')).toBeInTheDocument();
    expect(
      screen.getByText('Geração de Leads em Software')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Geração de Leads em Imobiliária')
    ).toBeInTheDocument();
    expect(screen.getByText('Cases de Sucesso')).toBeInTheDocument();

    const materialsElements = screen.getAllByText('Materiais');
    expect(materialsElements.length).toBe(2);
    expect(materialsElements[0]).toBeInTheDocument();

    expect(screen.getByText('Email:')).toBeInTheDocument();
    expect(screen.getByText('contato@leadster.com.br')).toBeInTheDocument();
    expect(screen.getByText('Telefone:')).toBeInTheDocument();
    expect(screen.getByText('(42) 98828-9851')).toBeInTheDocument();

    expect(
      screen.getByText('Copyright © 2015 - 2022 Todos os direitos reservados |')
    ).toBeInTheDocument();
    expect(screen.getByText('Leadster')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso'
      )
    ).toBeInTheDocument();
  });
});
