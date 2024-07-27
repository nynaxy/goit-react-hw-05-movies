import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((data) => {
          console.log("Searched movies:", data);
          if (data && data.results) {
            setMovies(data.results);
          }
        })
        .catch((error) => {
          console.error("Error searching movies:", error);
        });
    }
  }, [query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchQuery = form.query.value;
    if (searchQuery) {
      searchParams.set("query", searchQuery);
      window.history.pushState({}, "", `?query=${searchQuery}`);
      setMovies([]);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;