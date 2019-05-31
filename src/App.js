import React from "react";
import { MovieProvider } from "./Context/MovieContext";

import MovieList from "./Components/MoviesList";
import Nav from "./Components/Nav";
import AddMovie from "./Components/AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <AddMovie />
        <Nav />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
