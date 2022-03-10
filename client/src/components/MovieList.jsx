import React from 'react';
import Movie from './Movie.jsx';

var MovieList = (props) => (
  <div>
    {props.movies.map(movie =>
      <Movie movie={movie} />
    )}
  </div>
);

export default MovieList;