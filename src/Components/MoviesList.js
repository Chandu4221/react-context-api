import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import { MovieContext } from "../Context/MovieContext";

const MovieList = () => {
  const [movies, setMovie] = useContext(MovieContext);

  return (
    <React.Fragment>
      {movies.map(movie => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </React.Fragment>
  );
};

export default MovieList;
