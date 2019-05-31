import React, { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovie] = useState([
    {
      name: "Spiderman",
      price: "10$",
      id: 1
    },
    {
      name: "Spiderman 2",
      price: "10$",
      id: 2
    },
    {
      name: "Spiderman 3",
      price: "10$",
      id: 3
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
