import React, { useState, useEffect } from 'react';
import axios from '../../api/movies';
import requests from '../../api/requests';
import './banner.styles.scss';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundSize: 'cover',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* div > 2 buttons */}
        <div className="banner__buttons">
          <button className="banner__button play-btn">Play</button>
          <button className="banner__button info-btn">More Info</button>
        </div>
        <h1 className="banner__desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
