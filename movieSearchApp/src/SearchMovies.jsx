import React, { useState } from "react";
import Card from "./Card";
const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  console.log(query);
  const searchMovie = async (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=2207d7e57d816fc9fd50c133581ded63&language=en-US&query=${query}&page=1&include_adult=false`;
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">
          movie name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="search"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        <button type="submit" className="button" onClick={searchMovie}>
          search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <Card movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default SearchMovies;
