import { useState, useEffect } from "react";

import "./App.css";

import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "98e3fb1f";

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (e) {
      console.error(e)
    }
  }

  // This will run on the first render but not on subsquent renders
  // useEffect(() => {
  //   getMovie("Clueless");
  // }, []);

  const movies = [
    "The Nightmare Before Christmas", "The Breakfast Club", "The Godfather", "Pulp Fiction",
    "The Dark Knight", "Eternal Sunshine of the Spotless Mind", "Star Wars", "Amélie",
    "Seven Samurai", "Shaun of the Dead"
  ];

  useEffect(() => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    getMovie(randomMovie);
  }, []);

  return (
    <div className="App">

      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}