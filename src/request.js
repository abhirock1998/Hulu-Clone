const ApiKey = `${process.env.REACT_APP_APIKEY}`;

export default {
  fetchTrending: `/trending/all/week?api_key=${ApiKey}&language=en-US`,
  fetchToprated: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${ApiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${ApiKey}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${ApiKey}&with_genres=27`,
  fetchRomanveMovies: `/discover/movie?api_key=${ApiKey}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${ApiKey}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${ApiKey}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${ApiKey}&with_genres=37`,
  fetchAnimation: `/discover/movie?api_key=${ApiKey}&with_genres=16`,
  fetchTV: `/discover/movie?api_key=${ApiKey}&with_genres=10770`,
  fetchMovieDetail: `?api_key=${ApiKey}&language=en-US'`,
};

