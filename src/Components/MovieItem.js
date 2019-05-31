import React from "react";

const MovieItem = ({ movie }) => {
  return (
    <div>
      Name Of the Movie
      <h3>{movie.name}</h3>
      Price: {movie.price}
      <hr />
    </div>
  );
};

export default MovieItem;
