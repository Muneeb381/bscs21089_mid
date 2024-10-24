import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import MovieItem from './MovieItem';

function Favorites() {
  const { favorites } = useContext(MovieContext);

  return (
    <div>
      <h2>Your Favorite Movies</h2>
      {favorites.length > 0 ? (
        <div className="movie-list">
          {favorites.map(movie => <MovieItem key={movie.id} movie={movie} />)}
        </div>
      ) : <p>No favorite movies yet.</p>}
    </div>
  );
}

export default Favorites;
