import React, { useState, useEffect } from 'react';
import axios from '../../api/movies';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import './row.scss';

const images_url = 'https://image.tmdb.org/t/p/original/';

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchUrl);
      // pushing the data to the movies state
      setMovies(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: '500px',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__film-images">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
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
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
