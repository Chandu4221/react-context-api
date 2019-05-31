import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
const Nav = () => {
  const [movies] = useContext(MovieContext);
  return <h1>No Of movies = {movies.length}</h1>;
};

export default Nav;
