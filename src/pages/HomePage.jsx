import React, { useEffect, useState } from 'react';
import MovieSection from '../components/MovieSection';
import { getPopularMovies, getTrendingMovies, getMovieDetails } from '../api'; 
import MovieModal from '../components/MovieModal';
import { MainContainer } from '../styles/styled'; 

function HomePage() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const popularMoviesData = await getPopularMovies();
                const trendingMoviesData = await getTrendingMovies();

                setPopularMovies(popularMoviesData.results.slice(0, 20));
                setTrendingMovies(trendingMoviesData.results.slice(0, 20));
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Falha ao carregar, tente novamente mais tarde.');
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    const openModal = async (movie) => {
        const movieDetails = await getMovieDetails(movie.id);
        setSelectedMovie(movieDetails);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedMovie(null);
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <MainContainer> 
            <MovieSection title="Trending Movies" movies={trendingMovies} onOpenModal={openModal} />
            <MovieSection title="Popular Movies" movies={popularMovies} onOpenModal={openModal} />
            <MovieModal movie={selectedMovie} isOpen={isModalOpen} onClose={closeModal} />
        </MainContainer>
    );
}

export default HomePage;
