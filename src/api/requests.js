const API_KEY = 'bec32c4fdb55e1742e85e24a3adc6426';

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&&page=1&with_genres=28`, //28
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=35`, //35
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&&page=1&with_genres=27`, //27
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=en-US&&page=1&with_genres=10749`, //10749
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=en-US&&page=1&with_genres=99`, //99
};

export default requests;
