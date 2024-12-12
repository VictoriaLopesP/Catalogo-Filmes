import axios from 'axios';

const API_KEY = '6bd46496fcd511555f5fa0b740f3098b';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
        params: {
            api_key: API_KEY,
            language: 'pt-BR',
            page: 1,
        },
    });
    return response.data;
};

export const getTrendingMovies = async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
        params: {
            api_key: API_KEY,
            language: 'pt-BR',
            page: 1,
        },
    });
    return response.data;
};

export const getMovieDetails = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
        params: {
            api_key: API_KEY,
            language: 'pt-BR',
        },
    });
    return response.data;
};
