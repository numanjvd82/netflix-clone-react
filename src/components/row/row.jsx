import React, { useState, useEffect } from 'react';
import axios from '../../api/movies';
import './row.scss';

const images_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      // pushing the data to the movies state
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__film-images">
        {movies.map((movie) => (
          <img
            className={`row__film-image ${
              isLargeRow && 'row__large__film-image'
            }`}
            key={movie.id}
            src={`${images_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
