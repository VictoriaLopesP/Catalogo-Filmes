import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainContainer, ProfileContainer, ProfileImage, UserInfo, EditableBio, SaveButton, FavoriteMoviesSection, FavoriteMovieCard, FavoriteMovieTitle, FavoriteMoviePoster, RemoveButton, FeedbackMessage, ChangeProfilePicButton, EditableInput, EditableBioWrapper } from '../styles/styled';
import { getMovieDetails } from '../api';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [bio, setBio] = useState('Sua biografia');
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(sessionStorage.getItem('name') || 'Nome do Usuário');
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [profilePic, setProfilePic] = useState(sessionStorage.getItem('profilePic') || '/path/to/default-profile-pic.jpg');

  useEffect(() => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
      
      navigate('/login');
    }
    const storedBio = localStorage.getItem('bio');
    if (storedBio) {
      setBio(storedBio);
    }

    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const fetchFavoriteMovies = async () => {
      const movies = await Promise.all(
        storedFavorites.map(async (id) => {
          const movie = await getMovieDetails(id);
          return movie;
        })
      );
      setFavoriteMovies(movies);
      setLoading(false);
    };

    if (storedFavorites.length > 0) {
      fetchFavoriteMovies();
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleSaveBio = () => {
    localStorage.setItem('bio', bio);
    setEditing(false);
  };

  const handleSaveName = () => {
    sessionStorage.setItem('name', name);  
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        sessionStorage.setItem('profilePic', reader.result);  
      };
      reader.readAsDataURL(file);
    }
  };

  const removeFromFavorites = (id) => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const updatedFavorites = storedFavorites.filter(favId => favId !== id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    const fetchUpdatedFavorites = async () => {
      const updatedMovies = await Promise.all(
        updatedFavorites.map(async (favId) => {
          const movie = await getMovieDetails(favId);
          return movie;
        })
      );
      setFavoriteMovies(updatedMovies);
      setFeedbackMessage('Filme removido dos favoritos!');
      setTimeout(() => setFeedbackMessage(''), 3000); 
    };

    fetchUpdatedFavorites();
  };

  return (
    <MainContainer>
      <ProfileContainer>
        <ProfileImage src={profilePic} alt="Imagem de perfil" />
        <ChangeProfilePicButton onClick={() => document.getElementById('profilePicInput').click()}>
          Alterar foto de perfil
        </ChangeProfilePicButton>
        <input 
          id="profilePicInput"
          type="file" 
          accept="image/*" 
          onChange={handleProfilePicChange} 
          style={{ display: 'none' }}
        />
        <UserInfo>
          {editing ? (
            <>
              <EditableInput 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                onBlur={handleSaveName}
              />
              <EditableBioWrapper>
                <EditableBio value={bio} onChange={(e) => setBio(e.target.value)} />
              </EditableBioWrapper>
            </>
          ) : (
            <>
              <h2>{name}</h2>
              <p>{bio}</p>
            </>
          )}
          {editing ? (
            <SaveButton onClick={handleSaveBio}>Salvar</SaveButton>
          ) : (
            <SaveButton onClick={() => setEditing(true)}>Editar</SaveButton>
          )}
        </UserInfo>

        <FavoriteMoviesSection>
          <h3>Filmes Favoritos</h3>
          {feedbackMessage && <FeedbackMessage>{feedbackMessage}</FeedbackMessage>}
          <div>
            {loading ? (
              <p>Carregando filmes favoritos...</p>
            ) : favoriteMovies.length > 0 ? (
              favoriteMovies.map((movie) => (
                <FavoriteMovieCard key={movie.id}>
                  <RemoveButton onClick={() => removeFromFavorites(movie.id)}>X</RemoveButton>
                  <FavoriteMoviePoster src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                  <FavoriteMovieTitle>{movie.title}</FavoriteMovieTitle>
                </FavoriteMovieCard>
              ))
            ) : (
              <p>Nenhum filme favoritado ainda.</p>
            )}
          </div>
        </FavoriteMoviesSection>
      </ProfileContainer>
    </MainContainer>
  );
};

export default ProfilePage;
