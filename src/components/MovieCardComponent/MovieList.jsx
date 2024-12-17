import React from 'react'
import roudhiram from '../img/1538894691.jpg'
import sooksha from '../img/481162833.jpg'
import qalb from '../img/1731525465.jpg'
import pushpa from '../img/1492057053.jpg'
import MovieCard from './MovieCard'
import './MovieList.css'

const movies = [
    {id:1,title:"Rudhiram",duration:"1 hr 48 m",language:'Malayalam',imageUrl:roudhiram},
    {id:2,title:"Pushpa",duration:"1 hr 48 m",language:'Tamil',imageUrl:pushpa},
    {id:3,title:"Qalb",duration:"1 hr 48 m",language:'Malayalam',imageUrl:qalb},
    {id:4,title:"SookshmaDarshini",duration:"1 hr 48 m",language:'Malayalam',imageUrl:sooksha}



]


const MoviesList = () => {
    return (
        <div className="movies-list-container">
            <h2 className="now-showing">Now Showing</h2>
            <div className="movies-list">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviesList;