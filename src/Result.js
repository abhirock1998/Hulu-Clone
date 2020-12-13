import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./result.css";
import VideoCard from "./VideoCard";
import FlipMove from "react-flip-move";

function Result({ selectedGenere }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      await axios
        .get(selectedGenere)
        .then((response) => setMovies(response.data.results))
        .catch((e) => console.log("Error in fetching data ===>>>", e));
    };
    getMovie();
  }, [selectedGenere]);

  return (
    <div className="results">
      <FlipMove>
        {movies?.map((movie) => {
          return (
            <VideoCard
              key={movie.id}
              src={movie.backdrop_path || movie.poster_path}
              title={movie.title || movie.original_name}
              description={movie.overview}
              vote={movie.vote_count}
              date={movie.release_date || movie.first_air_date}
            />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Result;
