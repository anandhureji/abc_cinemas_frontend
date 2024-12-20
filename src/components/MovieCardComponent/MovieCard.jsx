import React from 'react';
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.image_data} alt={movie.title} className="movie-image" />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Duration: {movie.duration} mins</p>
                <p>Language: {movie.language}</p>
            </div>
        </div>
    );
};

export default MovieCard