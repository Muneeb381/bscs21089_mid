import React from 'react';
import { Link } from 'react-router-dom';

function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieItem;
