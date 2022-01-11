import React, { useState, useEffect } from 'react';
import {
  MovieList,
  SearchBox,
  MovieListHeading,
  AddFavourite,
} from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMoviesRequest = async (val) => {
    // const url = `https://www.omdbapi.com/?s=star wars&apikey=263d22d8`;
    const url = `https://www.omdbapi.com/?s=${val}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMoviesRequest(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="row">
        <MovieList movies={movies} favouriteComponent={AddFavourite} />
      </div>
    </div>
  );
}
