import React from 'react';

const MovieList = (props) => {
  console.log({ props });
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div key={index} className="d-flex justify-content-start m-3">
          <img src={movie.Poster} alt="movie" />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
