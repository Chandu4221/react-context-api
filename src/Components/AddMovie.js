import React, { useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const handleAddMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);
  };
  return (
    <div>
      <form onSubmit={handleAddMovie}>
        <label>
          Name Of the Movie
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label>
          Price Of the Movie
          <input
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
