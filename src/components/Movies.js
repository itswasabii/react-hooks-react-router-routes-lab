
import React from 'react';
import { movies as moviesData } from '../data'; 

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesData.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, i) => (
              <li key={i}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
