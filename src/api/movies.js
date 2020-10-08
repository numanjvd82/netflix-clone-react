import axios from 'axios';

const fetchMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default fetchMovies;
