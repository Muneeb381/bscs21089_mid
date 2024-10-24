import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=fe8b3d24`);
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
      setLoading(false);
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <div>
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.overview}</p>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
