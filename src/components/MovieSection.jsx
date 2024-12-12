import React from 'react';
import { CarouselContainer, Card } from '../styles/styled';
import MovieCard from './MovieCard';

function MovieSection({ title, movies, onOpenModal }) {
  return (
    <div>
      <h2>{title}</h2>
      <CarouselContainer>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <MovieCard movie={movie} onOpenModal={onOpenModal} /> 
          </Card>
        ))}
      </CarouselContainer>
    </div>
  );
}

export default MovieSection;
