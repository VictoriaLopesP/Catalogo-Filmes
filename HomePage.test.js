import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from './HomePage';
import { getPopularMovies, getTrendingMovies } from '../api'; 
import '@testing-library/jest-dom'; 

jest.mock('../api', () => ({
  getPopularMovies: jest.fn(),
  getTrendingMovies: jest.fn(),
}));

describe('HomePage', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it('deve exibir o texto de carregamento inicialmente', () => {
    render(<HomePage />);
    expect(screen.getByText(/Carregando/i)).toBeInTheDocument();
  });

  it('deve exibir seções com filmes populares e em tendência após carregar os dados', async () => {
    getPopularMovies.mockResolvedValue({
      results: [{ id: 1, title: 'Popular Movie 1' }, { id: 2, title: 'Popular Movie 2' }],
    });
    getTrendingMovies.mockResolvedValue({
      results: [{ id: 3, title: 'Trending Movie 1' }, { id: 4, title: 'Trending Movie 2' }],
    });

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Trending Movies/i)).toBeInTheDocument();
      expect(screen.getByText(/Popular Movies/i)).toBeInTheDocument();
    });

    expect(screen.getByText(/Popular Movie 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Trending Movie 1/i)).toBeInTheDocument();
  });

  it('deve exibir uma mensagem de erro caso as chamadas de API falhem', async () => {
    getPopularMovies.mockRejectedValue(new Error('API Error'));
    getTrendingMovies.mockRejectedValue(new Error('API Error'));

    render(<HomePage />);

    await waitFor(() => {
      expect(screen.getByText(/Falha ao carregar, tente novamente mais tarde/i)).toBeInTheDocument();
    });
  });
});
