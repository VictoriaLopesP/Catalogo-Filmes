import React from 'react';
import { Card, CardImage, CardBody, Button } from '../styles/styled';

const MovieCard = ({ movie, onOpenModal }) => {
  return (
    <Card>
      <CardImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <CardBody>
        <h3>{movie.title}</h3>
        <Button onClick={() => onOpenModal(movie)}>Ver mais</Button>
      </CardBody>
    </Card>
  );
};

export default MovieCard;
