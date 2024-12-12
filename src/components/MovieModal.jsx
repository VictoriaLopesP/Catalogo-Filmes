import React, { useState } from 'react';
import Modal from 'react-modal';
import { CloseButton, StyledModal, ModalContent, PosterImage, InfoContainer, FavoriteButton, FeedbackMessage } from '../styles/styled';

const MovieModal = ({ movie, isOpen, onClose }) => {
  const [showFeedback, setShowFeedback] = useState(false); 

  if (!movie) return null;

  const formatReleaseDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
  };

  const addToFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!storedFavorites.includes(movie.id)) {
      storedFavorites.push(movie.id);
      localStorage.setItem('favorites', JSON.stringify(storedFavorites));
      setShowFeedback(true); 
      setTimeout(() => {
        setShowFeedback(false); 
      }, 3000);
    }
  };

  return (
    <StyledModal isOpen={isOpen} onRequestClose={onClose}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ModalContent>
        <PosterImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <InfoContainer>
          <h2>{movie.title}</h2>
          <p>Duração: {movie.runtime} min</p>
          <p>Classificação: {movie.adult ? '18+' : 'Livre'}</p>
          <p>Data de Lançamento: {formatReleaseDate(movie.release_date)}</p>
          <p>{movie.overview}</p>
          <FavoriteButton onClick={addToFavorites}>Adicionar aos Favoritos</FavoriteButton>
          {showFeedback && <FeedbackMessage>Adicionado aos favoritos!</FeedbackMessage>}
        </InfoContainer>
      </ModalContent>
    </StyledModal>
  );
};

export default MovieModal;
