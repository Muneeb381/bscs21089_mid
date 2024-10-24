import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItem from './MovieItem'; 
import SearchBar from './SearchBar'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  const fetchMovies = async (term) => {
    setLoading(true);
    setError(null); 
    try {
      const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=fe8b3d24=${term}`);
      if (response.data.Response === "True") {
        setMovies(response.data.Search); 
      } else {
        setMovies([]); 
        setError(response.data.Error); 
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch movies.'); 
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies('batman'); 
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchMovies(term); 
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="movie-list">
        {Array.isArray(movies) && movies.length > 0 ? ( 
          movies.map(movie => (
            <MovieItem key={movie.imdbID} movie={movie} /> 
          ))
        ) : (
          !loading && <p>No movies found.</p> 
        )}
      </div>
    </div>
  );
};

export default MovieList;
