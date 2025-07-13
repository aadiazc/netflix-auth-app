// src/Home.js
import React from 'react';

const Home = () => {
  const movies = [
    { title: 'Matrix', year: 1999 },
    { title: 'Inception', year: 2010 },
    { title: 'Interstellar', year: 2014 },
  ];

  return (
    <div className="home-container">
      <h1>🎬 Bienvenido a CECYFLIX</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
      <button onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Home;